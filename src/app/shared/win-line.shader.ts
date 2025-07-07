export const winLineVertexShader = `
  uniform float time;
  uniform float bulgePosition; // Normalized position (0 to 1) along the tube where the bulge is centered
  uniform float bulgeSize;     // Width of the bulge
  uniform float bulgeAmplitude; // Max displacement of the bulge outwards

  // Passed to fragment shader for lighting/color
  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vPosition;
  varying vec2 vUv; // uv.x is along the tube, uv.y is around the circumference

  void main() {
    vNormal = normalMatrix * normal;
    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
    vViewDir = normalize(cameraPosition - vPosition);
    vUv = uv;

    // Calculate the bulge factor
    // Use a smoothstep or similar function to create a smooth falloff for the bulge
    // The 'distance' from the current vertex's uv.x to the bulgePosition
    float dist = abs(uv.x - bulgePosition);
    
    // Create a smooth, localized bulge profile
    // This creates a bell-shaped curve. 'bulgeSize' determines how wide the bell is.
    float bulgeFactor = smoothstep(bulgeSize, 0.0, dist);

    // Apply the bulge displacement along the normal vector
    // Multiply by original 'radius' to make it scale proportionally, or just use bulgeAmplitude
    vec3 displacedPosition = position + normal * (bulgeFactor * bulgeAmplitude);

    gl_Position = projectionMatrix * modelViewMatrix * vec4(displacedPosition, 1.0);
  }
`;


export const winLineFragmentShader = `
  uniform float time;
  uniform vec3 color;
  uniform samplerCube envMap; // Your environment map for reflections/refractions
  uniform float opacity;
  uniform float ior;          // Index of Refraction for realistic glass/water
  uniform float reflectivity; // How strong reflections are

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying vec3 vPosition;
  varying vec2 vUv;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewDir);

    // Fresnel effect for more realistic reflections at grazing angles
    float Fresnel = 0.0 + 1.0 * pow(1.0 - dot(normal, viewDir), 5.0);

    // Basic reflection
    vec3 reflected = reflect(-viewDir, normal);
    vec4 envColor = textureCube(envMap, reflected);
    vec3 reflection = envColor.rgb;

    vec3 baseColor = color;
    
    vec3 finalColor = mix(baseColor, reflection, Fresnel * reflectivity);

    gl_FragColor = vec4(finalColor, opacity); // Use the uniform opacity
  }
`;