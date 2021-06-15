import {
  Engine,
  SceneLoader,
  Scene,
  Vector3,
  CubicEase,
  EasingFunction,
  Animation,
  ArcRotateCamera
} from 'babylonjs'
import 'babylonjs-loaders'

import nav from './nav'
import createUI from './ui'

const canvas = document.getElementById('app')
const engine = new Engine(canvas as HTMLCanvasElement)

const scene = new Scene(engine)

SceneLoader.Append(
  'assets/玄关0609测试.obj/',
  '玄关0609.obj',
  scene,
  function () {
    // Create a default arc rotate camera and light.
    scene.createDefaultCameraOrLight(true)
    const camera = <ArcRotateCamera>scene.activeCamera
    camera.attachControl(canvas, false)
    camera.checkCollisions = true

    nav.navToXuanguan(scene)

    createUI(scene)

    engine.runRenderLoop(function () {
      scene.render()
    })
  }
)

window.addEventListener('resize', function () {
  engine.resize()
})
