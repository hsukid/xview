import {
  Engine,
  SceneLoader,
  Scene,
  Vector3,
  CubicEase,
  EasingFunction,
  Animation,
  ArcRotateCamera,
  UniversalCamera,
  HemisphericLight
} from 'babylonjs'
import 'babylonjs-loaders'

import nav from './nav'
import createUI from './ui'

const canvas = document.getElementById('app')
const engine = new Engine(canvas as HTMLCanvasElement)

const scene = new Scene(engine)

// const uri = 'shiyan.gltf'
const uri = '中鼎工程文件.gltf'

SceneLoader.Append('assets/', uri, scene, function (o) {
  // Create a default arc rotate camera and light.
  // scene.createDefaultCameraOrLight(false, false, true)
  const light = new HemisphericLight('HemiLight', new Vector3(0, 1, 0), scene)
  // const camera = <UniversalCamera>o.cameras[0]
  const camera = new UniversalCamera('free', new Vector3(-10, 50, -10), scene)
  scene.activeCamera = camera
  // const camera = <UniversalCamera>scene.activeCamera
  camera.attachControl(canvas, false)
  // scene.gravity = new Vector3(0, -9.81, 0)

  // camera.applyGravity = true
  camera.ellipsoid = new Vector3(1, 1, 1)

  // scene.collisionsEnabled = true
  camera.checkCollisions = true

  console.log(o)
  // camera.checkCollisions = true

  // camera.radius = 10
  // camera.set
  // camera.setTarget(Vector3.Zero())
  // // camera.maxZ = 120
  // camera.upperRadiusLimit = 20

  // nav.navToXuanguan(scene)

  // createUI(scene)

  window.scenex = scene

  engine.runRenderLoop(function () {
    scene.render()
  })
})

window.addEventListener('resize', function () {
  engine.resize()
})
