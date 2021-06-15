import { Scene, Vector3 } from 'babylonjs'
import { ArcRotateCamera } from 'babylonjs/Cameras/arcRotateCamera'
import animateCameraToPosition from './animateCameraToPosition'

const navToXuanguan = (scene: Scene) => {
  const cam = <ArcRotateCamera>scene.activeCamera
  cam.setTarget(new Vector3(-6089.892, 1887.557, -6382.05))
  animateCameraToPosition(
    cam,
    new Vector3(-7611.2997728084265, 1533.6103251633651, -15326.182394067468)
  )
}

const navToKeting = (scene: Scene) => {
  const cam = <ArcRotateCamera>scene.activeCamera
  cam.setTarget(new Vector3(-6e3, 1500, -6600))
  animateCameraToPosition(
    cam,
    new Vector3(-5885.64660629611, 1504.7793216506518, -6860.526962584435)
  )
}

export default {
  navToKeting,
  navToXuanguan
}
