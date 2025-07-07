// Copy the content of node_modules/three/examples/jsm/objects/MarchingCubes.js here
// and adjust exports/imports for your Angular/TypeScript setup.
// Example:
/* eslint-disable */
import * as THREE from 'three';

const _vA = new THREE.Vector3();
const _vB = new THREE.Vector3();
const _vC = new THREE.Vector3();
const _cb = new THREE.Vector3();
const _ab = new THREE.Vector3();

// Marching Cubes Algorithm
// Based on an article by Paul Bourke:
// http://local.wasp.uwa.edu.au/~pbourke/geometry/polygonise/
export class MarchingCubes extends THREE.Mesh {

    // ... (rest of the MarchingCubes class methods) ...
    // You'll copy the entire class definition from the Three.js example.
    // Ensure `import * as THREE from 'three';` is at the top.
    // Replace `exports.MarchingCubes = MarchingCubes;` with `export { MarchingCubes };` at the end
    // Or just make it `export class MarchingCubes extends THREE.Mesh { ... }` directly.
}