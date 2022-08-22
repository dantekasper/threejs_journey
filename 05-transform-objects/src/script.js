import './style.css'
import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)

// Position
mesh.position.y = .5
mesh.position.x = .7
mesh.position.z = 1
scene.add(mesh)

// Scale 
mesh.scale.x = 1.5
mesh.scale.y = .5
mesh.scale.z = 1.2

// Rotation
mesh.rotation.y = 0.5
mesh.rotation.x = 0.5
mesh.rotation.z = 0.7


// Axes Helper 
const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)



/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.x = 1
camera.position.y = 1
camera.position.z = 3
scene.add(camera)

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)