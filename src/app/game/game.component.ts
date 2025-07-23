import { Component, ElementRef, ViewChild, AfterViewInit, OnDestroy, NgZone, HostListener } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CommonModule } from '@angular/common'; // Required for ngIf etc.
import { UltraHDRLoader } from 'three/addons/loaders/UltraHDRLoader.js';
import { SettingComponent } from '../setting/setting.component';

type Player = 'X' | 'O';
type Cell = Player | null;

interface WinLine {
  type: string; // e.g., 'row', 'column', 'depth', 'diag2D', 'diag3D'
  start: [number, number, number];
  end: [number, number, number];
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, SettingComponent],
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements AfterViewInit, OnDestroy {
  // Reference to the canvas element in the template
  @ViewChild('rendererCanvas')
  private rendererCanvas!: ElementRef<HTMLCanvasElement>;

  @ViewChild('hoverSound') hoverSoundRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('clickSound') clickSoundRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('winSound') winSoundRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('drawSound') drawSoundRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('bgSound') bgSoundRef!: ElementRef<HTMLAudioElement>;
  @ViewChild(SettingComponent) projectDetailsDialog!: SettingComponent;


  // Three.js core components
  private scene!: THREE.Scene;
  private loader!: UltraHDRLoader;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private controls!: OrbitControls;

  public isMusicEnabled: boolean = true;
  public isSoundEffectsEnabled: boolean = true;

  // Raycasting for interactive clicks
  private raycaster!: THREE.Raycaster;
  private mouse!: THREE.Vector2;

  // Game specific 3D objects
  private boardCubes: THREE.Mesh[] = [];
  private markerGroup!: THREE.Group;

  public board: Cell[][][] = [];
  public currentPlayer: Player = 'X';
  public winner: Player | null = null;
  public isDraw: boolean = false;
  public isGameStarted: boolean = false;

  private animationFrameId: number | null = null;
  private clock = new THREE.Clock();

  private readonly gridSize = 3;
  private readonly cellSize = 2;
  private readonly cellSpacing = 2;
  private boardScaleAnimationActive: boolean = false;
  private boardScaleAnimationStartTime: number = 0;
  private boardScaleAnimationDuration: number = 500;
  private boardScaleInitial: number = 0.001;
  private boardScaleFinal: number = 1.0;
  private boardScaleOvershoot: number = 0.1;
  private boardScaleOvershootDuration: number = 200;


  private sphereAnimationData: {
    mesh: THREE.Mesh;
    initialPosition: THREE.Vector3;
    animationOffset: number;
  }[] = [];
  private winLineMesh: THREE.Mesh | null = null; // Updated type
  loading: boolean = true;

  constructor(private ngZone: NgZone) { }

  @HostListener('window:resize')
  onHostWindowResize() {
    setTimeout(() => {
      this.onWindowResize();
    });
  }

  ngAfterViewInit(): void {
    if (!this.rendererCanvas) {
      console.error("Renderer canvas not available in ngAfterViewInit!");
      return;
    }

    setTimeout(() => {
      this.initThreeJS();
      // this.createBoardCells();
      this.resetGameInternal();
      this.animate();

      this.rendererCanvas.nativeElement.addEventListener('click', this.onCanvasClick.bind(this));

      this.toggleBackgroundMusic(this.isMusicEnabled);

    }, 0);
  }


  ngOnDestroy(): void {
    if (this.animationFrameId !== null) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.rendererCanvas && this.rendererCanvas.nativeElement) {
      this.rendererCanvas.nativeElement.removeEventListener('click', this.onCanvasClick.bind(this));
    }
    if (this.controls) {
      this.controls.dispose();
    }
    if (this.renderer) {
      this.renderer.dispose();
    }

    this.boardCubes.forEach(cube => {
      if (cube.geometry) cube.geometry.dispose();
      if (Array.isArray(cube.material)) {
        cube.material.forEach(m => m.dispose());
      } else if (cube.material) {
        (cube.material as THREE.Material).dispose();
      }
    });
    this.boardCubes = [];

    if (this.markerGroup) {
      this.markerGroup.children.slice().forEach((child: any) => {
        if (child.geometry) child.geometry.dispose();
        if (child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach((m: THREE.Material) => m.dispose());
          } else {
            (child.material as THREE.Material).dispose();
          }
        }
        // If it's a group (like the X marker), dispose its children too
        if (child instanceof THREE.Group) {
          child.children.slice().forEach((part: any) => {
            if (part.geometry) part.geometry.dispose();
            if (part.material) (part.material as THREE.Material).dispose();
          });
          child.clear(); // Clear children from the group
        }
      });
      this.markerGroup.clear(); // Remove all children from the marker group
    }

    if (this.scene) {
      this.scene.traverse((object: any) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material: THREE.Material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      this.scene.clear();
    }
  }

  private initThreeJS(): void {
    this.scene = new THREE.Scene();
    this.loader = new UltraHDRLoader();
    this.loader.setDataType(THREE.FloatType);
    this.loader.load(`blue_photo_studio_4k.jpg`, (texture) => {
      texture.mapping = THREE.EquirectangularReflectionMapping;
      texture.needsUpdate = true;
      this.scene.background = texture;
      this.scene.environment = texture;
      this.loading = false;
      this.createBoardCells();
      this.boardScaleAnimationActive = true;
      this.boardScaleAnimationStartTime = this.clock.getElapsedTime() * 1000;
    });

    const canvas = this.rendererCanvas.nativeElement;
    const canvasWidth = canvas.clientWidth;
    const canvasHeight = canvas.clientHeight;

    if (canvasWidth === 0 || canvasHeight === 0) {
      console.error("Canvas dimensions are 0. Ensure it's visible and has dimensions.");
      this.camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000);
    } else {
      this.camera = new THREE.PerspectiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);
    }

    this.camera.position.set(
      this.gridSize * this.cellSize * -2,
      this.gridSize * this.cellSize * 2,
      this.gridSize * this.cellSize * 2
    );
    this.camera.lookAt(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    this.renderer.setSize(canvasWidth, canvasHeight);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight.position.set(8, 15, 10);
    this.scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(-8, 5, -10);
    this.scene.add(fillLight);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.minDistance = 3;
    this.controls.maxDistance = 40;
    this.controls.target.set(0, 0, 0);
    this.controls.update();


    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();

    this.markerGroup = new THREE.Group();
    this.scene.add(this.markerGroup);
  }


  private createBoardCells(): void {
    const boardVisualSize = this.gridSize * this.cellSize + (this.gridSize - 1) * this.cellSpacing;
    const offset = -boardVisualSize / 2 + this.cellSize / 2;

    const geometry = new THREE.SphereGeometry(this.cellSize / 2, 32, 16);
    setTimeout(() => {


      for (let x = 0; x < this.gridSize; x++) {
        for (let y = 0; y < this.gridSize; y++) {
          for (let z = 0; z < this.gridSize; z++) {
            const material = new THREE.MeshPhysicalMaterial({
              color: 0xF0F8FF,
              transparent: false,
              opacity: 0.9,
              transmission: 1,
              roughness: 0,
              metalness: 0.0,
              clearcoat: 1.0,
              clearcoatRoughness: 0.05,
              ior: 1.31,
              sheen: 0.0,
              reflectivity: 0.5,
              specularIntensity: 1.0,
              specularColor: new THREE.Color(0xFFFFFF),
              thickness: 5,
              envMap: this.scene.environment
            });

            const cube = new THREE.Mesh(geometry, material);
            const initialX = x * (this.cellSize + this.cellSpacing) + offset;
            const initialY = y * (this.cellSize + this.cellSpacing) + offset;
            const initialZ = z * (this.cellSize + this.cellSpacing) + offset;
            cube.position.set(initialX, initialY, initialZ);
            cube.userData = { x, y, z, isCell: true };
            this.boardCubes.push(cube);
            this.scene.add(cube);
            this.sphereAnimationData.push({
              mesh: cube,
              initialPosition: new THREE.Vector3(initialX, initialY, initialZ),
              animationOffset: Math.random() * Math.PI * 2 // Random phase offset for varied animation
            });
          }
        }
      }
    }, 100);
  }

  public animateWaterDroplets(time: number): void {
    if (this.boardScaleAnimationActive) return;

    const pulsationAmplitude = 0.08; // How much the size changes (e.g., 8% change)
    const pulsationSpeed = 2.0;       // How fast the size changes

    // Optional: for subtle non-uniform squash/stretch
    const squashStretchAmplitude = 0.03; // Smaller amplitude for subtle shape change
    const squashStretchSpeed = 2.5;      // Slightly different speed for variation

    this.sphereAnimationData.forEach(data => {
      const { mesh, initialPosition, animationOffset } = data;

      // Keep position fixed
      mesh.position.copy(initialPosition);

      // Uniform pulsating scale
      const uniformScaleFactor = 1 + Math.sin(time * pulsationSpeed + animationOffset) * pulsationAmplitude;

      // Subtle non-uniform scale for water droplet effect
      // When X/Z expand, Y contracts, and vice-versa
      const nonUniformScaleFactor = Math.sin(time * squashStretchSpeed + animationOffset + Math.PI / 2) * squashStretchAmplitude;
      // Using Math.PI / 2 offset for the Y axis ensures it's out of phase with X/Z,
      // so when X/Z are large, Y is small, creating a squishing effect.

      mesh.scale.set(
        uniformScaleFactor + nonUniformScaleFactor,
        uniformScaleFactor - nonUniformScaleFactor, // Y contracts when X/Z expand
        uniformScaleFactor + nonUniformScaleFactor
      );
    });
  }



  private resetGameInternal(): void {
    // Initialize the 3D board array with nulls
    this.board = [];
    for (let i = 0; i < this.gridSize; i++) {
      this.board[i] = [];
      for (let j = 0; j < this.gridSize; j++) {
        this.board[i][j] = [];
        for (let k = 0; k < this.gridSize; k++) {
          this.board[i][j][k] = null;
        }
      }
    }

    this.currentPlayer = 'X';
    this.winner = null;
    this.isDraw = false;
    this.isGameStarted = false;
    this.removeWinLine();

    this.markerGroup.children.slice().forEach((child: any) => {
      if (child.geometry) child.geometry.dispose();
      if (child.material) {
        if (Array.isArray(child.material)) child.material.forEach((m: THREE.Material) => m.dispose());
        else (child.material as THREE.Material).dispose();
      }
      if (child instanceof THREE.Group) { // Handle X marker group
        child.children.slice().forEach((part: any) => {
          if (part.geometry) part.geometry.dispose();
          if (part.material) (part.material as THREE.Material).dispose();
        });
        child.clear();
      }
    });
    this.markerGroup.clear();
  }

  public resetGame(): void {
    this.ngZone.run(() => {
      this.resetGameInternal();
      this.playClickSound();
    });
  }


  private onCanvasClick(event: MouseEvent): void {
    if (this.winner || this.isDraw || !this.rendererCanvas || this.boardScaleAnimationActive) return;

    const canvas = this.rendererCanvas.nativeElement;
    const rect = canvas.getBoundingClientRect(); // Get canvas position and size relative to viewport

    this.mouse.x = ((event.clientX - rect.left) / canvas.clientWidth) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / canvas.clientHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.boardCubes, false);

    if (intersects.length > 0) {
      const clickedObject = intersects[0].object;
      if (clickedObject instanceof THREE.Mesh && clickedObject.userData['isCell']) {
        const { x, y, z } = clickedObject.userData;
        this.ngZone.run(() => {
          this.handleCellClick(x, y, z, clickedObject as THREE.Mesh);
        });
      }
    }
  }

  private handleCellClick(x: number, y: number, z: number, cube: THREE.Mesh): void {
    if (this.board[x][y][z] === null && !this.winner) {
      this.isGameStarted = true;
      this.board[x][y][z] = this.currentPlayer;
      this.placeMarker(cube.position);

      const material = cube.material as THREE.MeshPhysicalMaterial;
      if (material) {
        material.opacity = 0.05;
      }

      const winInfo = this.checkWin(x, y, z);
      if (winInfo) {
        this.winner = this.currentPlayer;
        this.drawWinLine(winInfo);
        this.playWinSound();
      } else if (this.checkDraw()) {
        this.isDraw = true;
        this.playDrawSound();
      } else {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  private removeWinLine(): void {
    if (this.winLineMesh) {
      this.scene.remove(this.winLineMesh);
      if (this.winLineMesh.geometry) this.winLineMesh.geometry.dispose();
      if (this.winLineMesh.material) (this.winLineMesh.material as THREE.Material).dispose();
      this.winLineMesh = null;
    }
  }

  private placeMarker(position: THREE.Vector3): void {
    this.playClickSound();
    let marker: THREE.Object3D;
    const markerScale = this.cellSize * 0.4;

    if (this.currentPlayer === 'X') {
      marker = this.createXMarker(markerScale * 1.1);
    } else {
      const oGeometry = new THREE.TorusGeometry(markerScale * 0.8, markerScale * 0.2, 16, 100);
      const oMaterial = new THREE.MeshStandardMaterial({
        color: 0x3B82F6,
        roughness: 0.3,
        metalness: 0.4,
      });
      marker = new THREE.Mesh(oGeometry, oMaterial);
    }

    marker.position.copy(position);
    this.markerGroup.add(marker);
  }

  private createXMarker(size: number): THREE.Group {
    const xGroup = new THREE.Group();
    const barHeight = size * 1.2;
    const barThickness = size * 0.2;
    const barGeometry = new THREE.CapsuleGeometry(barThickness / 2, barHeight - barThickness, 4, 8);
    const xMaterial = new THREE.MeshStandardMaterial({ color: 0xff6b6b, roughness: 0.4, metalness: 0.3 }); // Brighter Red for X

    const bar1 = new THREE.Mesh(barGeometry, xMaterial);
    bar1.rotation.z = Math.PI / 4;

    const bar2 = new THREE.Mesh(barGeometry, xMaterial.clone());
    bar2.rotation.z = -Math.PI / 4;

    xGroup.add(bar1);
    xGroup.add(bar2);
    return xGroup;
  }

  private checkWin(lastX: number, lastY: number, lastZ: number): WinLine | null {
    const player = this.board[lastX][lastY][lastZ];
    if (!player) return null; // Should not happen if called correctly

    const N = this.gridSize;

    const checkLine = (lineCoords: [number, number, number][], type: string): WinLine | null => {
      let count = 0;
      for (const [x, y, z] of lineCoords) {
        if (this.board[x][y][z] === player) {
          count++;
        } else {
          break;
        }
      }
      if (count === N) {
        return { type, start: lineCoords[0], end: lineCoords[N - 1] };
      }
      return null;
    };

    let line: WinLine | null;

    // 1. Lines parallel to axes (rows, columns, depths)
    line = checkLine(Array.from({ length: N }, (_, i) => [i, lastY, lastZ]), 'rowX'); if (line) return line;
    line = checkLine(Array.from({ length: N }, (_, i) => [lastX, i, lastZ]), 'rowY'); if (line) return line;
    line = checkLine(Array.from({ length: N }, (_, i) => [lastX, lastY, i]), 'rowZ'); if (line) return line;

    // 2. 2D diagonals on planes
    if (lastY === lastZ) { line = checkLine(Array.from({ length: N }, (_, i) => [lastX, i, i]), 'diagYZ1'); if (line) return line; }
    if (lastY + lastZ === N - 1) { line = checkLine(Array.from({ length: N }, (_, i) => [lastX, i, N - 1 - i]), 'diagYZ2'); if (line) return line; }
    if (lastX === lastZ) { line = checkLine(Array.from({ length: N }, (_, i) => [i, lastY, i]), 'diagXZ1'); if (line) return line; }
    if (lastX + lastZ === N - 1) { line = checkLine(Array.from({ length: N }, (_, i) => [i, lastY, N - 1 - i]), 'diagXZ2'); if (line) return line; }
    if (lastX === lastY) { line = checkLine(Array.from({ length: N }, (_, i) => [i, i, lastZ]), 'diagXY1'); if (line) return line; }
    if (lastX + lastY === N - 1) { line = checkLine(Array.from({ length: N }, (_, i) => [i, N - 1 - i, lastZ]), 'diagXY2'); if (line) return line; }

    // 3. 3D Space Diagonals (4 main diagonals)
    if (lastX === lastY && lastY === lastZ) { line = checkLine(Array.from({ length: N }, (_, i) => [i, i, i]), 'diag3D_1'); if (line) return line; }
    if (lastX + lastY === N - 1 && lastY === lastZ) { line = checkLine(Array.from({ length: N }, (_, i) => [N - 1 - i, i, i]), 'diag3D_2'); if (line) return line; }
    if (lastX === lastZ && lastX + lastY === N - 1) { line = checkLine(Array.from({ length: N }, (_, i) => [i, N - 1 - i, i]), 'diag3D_3'); if (line) return line; }
    if (lastX === lastY && lastY + lastZ === N - 1) { line = checkLine(Array.from({ length: N }, (_, i) => [i, i, N - 1 - i]), 'diag3D_4'); if (line) return line; }

    return null;
  }

  private drawWinLine(winLine: WinLine): void {
    this.removeWinLine(); // Ensure no previous win line exists

    const player = this.winner;
    if (!player) return;

    const color = player === 'X' ? 0xff0000 : 0x0000ff;

    // Calculate the actual 3D positions of the start and end cells
    const boardVisualSize = this.gridSize * this.cellSize + (this.gridSize - 1) * this.cellSpacing;
    const offset = -boardVisualSize / 2 + this.cellSize / 2;

    const getCellCenter = (coords: [number, number, number]) => {
      const [x, y, z] = coords;
      return new THREE.Vector3(
        x * (this.cellSize + this.cellSpacing) + offset,
        y * (this.cellSize + this.cellSpacing) + offset,
        z * (this.cellSize + this.cellSpacing) + offset
      );
    };

    const startPoint = getCellCenter(winLine.start);
    const endPoint = getCellCenter(winLine.end);


    // Create a path for the tube
    const path = new THREE.CatmullRomCurve3([startPoint, endPoint]);

    // Define parameters for the tube geometry
    const radius = this.cellSize * 0.1; // Adjust this for desired thickness
    const tubularSegments = 128; // Number of segments along the tube's length
    const radialSegments = 64; // Number of segments around the tube's circumference
    const closed = false; // Is the tube closed (a loop)? No, it's a line.


    // Create the TubeGeometry
    const geometry = new THREE.TubeGeometry(path, tubularSegments, radius, radialSegments, closed);

    // Use a MeshStandardMaterial or MeshPhysicalMaterial for better lighting and reflections
    const material = new THREE.MeshPhysicalMaterial({
      color: color,
      transparent: false,
      opacity: 0.2,
      transmission: 1,
      roughness: 0,
      metalness: 0.0,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05,
      ior: 1.31,
      sheen: 0.0,
      reflectivity: 0.5,
      specularIntensity: 1.0,
      specularColor: new THREE.Color(0xFFFFFF),
      thickness: 2,
      envMap: this.scene.environment
    });

    this.winLineMesh = new THREE.Mesh(geometry, material);
    this.scene.add(this.winLineMesh);

    // The animation will now apply to the material properties of the mesh
  }


  private checkDraw(): boolean {
    for (let x = 0; x < this.gridSize; x++) {
      for (let y = 0; y < this.gridSize; y++) {
        for (let z = 0; z < this.gridSize; z++) {
          if (this.board[x][y][z] === null) {
            return false;
          }
        }
      }
    }
    return true;
  }

  private animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const loop = () => {
        this.animationFrameId = requestAnimationFrame(loop);

        if (this.renderer && this.scene && this.camera) {
          if (this.controls) this.controls.update();

          this.markerGroup.children.forEach(marker => {
            marker.rotation.y += 0.05;
          });

          const elapsedTime = this.clock.getElapsedTime() * 1000; // in milliseconds

          if (this.boardScaleAnimationActive) {
            const progress = Math.min(1, (elapsedTime - this.boardScaleAnimationStartTime) / this.boardScaleAnimationDuration);

            let currentScale = this.boardScaleInitial + (this.boardScaleFinal - this.boardScaleInitial) * (0.5 - 0.5 * Math.cos(progress * Math.PI)); // Ease in-out

            // Apply overshoot effect
            if (progress < 1) {
              // During the main animation, scale towards final
            } else {
              // After reaching final, quickly overshoot and return
              const overshootProgress = Math.min(1, (elapsedTime - (this.boardScaleAnimationStartTime + this.boardScaleAnimationDuration)) / this.boardScaleOvershootDuration);
              const overshootFactor = Math.sin(overshootProgress * Math.PI); // Sine wave for smooth overshoot
              currentScale = this.boardScaleFinal + this.boardScaleOvershoot * overshootFactor;
            }

            this.boardCubes.forEach(cube => {
              cube.scale.set(currentScale, currentScale, currentScale);
            });

            if (progress >= 1 && (elapsedTime - (this.boardScaleAnimationStartTime + this.boardScaleAnimationDuration)) >= this.boardScaleOvershootDuration) {
              this.boardScaleAnimationActive = false;
              this.controls.enabled = true; // Enable controls after animation
              // Ensure cubes are at their final scale
              this.boardCubes.forEach(cube => {
                cube.scale.set(this.boardScaleFinal, this.boardScaleFinal, this.boardScaleFinal);
              });
            }
            this.controls.update(); // Keep controls updated even if disabled.
          }
          // Normal game state: Controls enabled and other animations
          else {
            if (this.controls) this.controls.update();
            this.animateWaterDroplets(this.clock.getElapsedTime()); // Only animate droplets when scale animation is done
          }


          this.renderer.render(this.scene, this.camera);
        } else if (this.animationFrameId !== null) {
          cancelAnimationFrame(this.animationFrameId);
          this.animationFrameId = null;
        }
      };
      loop();
    });
  }

  public onWindowResize(): void {
    if (!this.camera || !this.renderer || !this.rendererCanvas || !this.rendererCanvas.nativeElement) return;

    const canvas = this.rendererCanvas.nativeElement;
    this.ngZone.runOutsideAngular(() => {
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;

      if (newWidth === 0 || newHeight === 0) {
        console.warn("onWindowResize: Canvas dimensions are 0. Resize not applied.");
        return;
      }

      this.camera.aspect = newWidth / newHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(newWidth, newHeight);
    });
  }

  public playClickSound(): void {
    this.playSound(this.clickSoundRef, this.isSoundEffectsEnabled);
  }

  public playHoverSound(): void {
    this.playSound(this.hoverSoundRef, this.isSoundEffectsEnabled);
  }

  private playWinSound(): void {
    this.playSound(this.winSoundRef, this.isSoundEffectsEnabled);
  }

  private playDrawSound(): void {
    this.playSound(this.drawSoundRef, this.isSoundEffectsEnabled);
  }

  private playSound(audioElementRef: ElementRef<HTMLAudioElement>, isEnabled: boolean): void {
    if (!isEnabled) return;

    if (audioElementRef && audioElementRef.nativeElement) {
      const audio = audioElementRef.nativeElement;
      audio.pause();
      audio.currentTime = 0;
      audio.play().catch(e => console.error("Error playing sound:", e));
    }
  }

  public toggleBackgroundMusic(enable: any): void {
    this.isMusicEnabled = enable;
    if (this.bgSoundRef && this.bgSoundRef.nativeElement) {
      if (enable) {
        this.bgSoundRef.nativeElement.play().catch(e => {
          // Autoplay policy might prevent playing on load without user interaction.
          console.error("Error playing background music:", e);
        });
      } else {
        this.bgSoundRef.nativeElement.pause();
        this.bgSoundRef.nativeElement.currentTime = 0;
      }
    }
  }

  public toggleSoundEffects(enable: any): void {
    this.isSoundEffectsEnabled = enable;
    // No direct action here, as playSound checks the flag
    // Can optionally stop any currently playing SFX if needed, though unlikely for short ones.
  }

  public openSettingMenu(): void {
    if (this.projectDetailsDialog) {
      this.projectDetailsDialog.open();
    }
  }

  public closeProjectDetailsDialog(): void {
    if (this.projectDetailsDialog) {
      this.projectDetailsDialog.close();
    }
  }
}