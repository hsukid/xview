import {
  Camera,
  Vector3,
  Animation,
  EasingFunction,
  CubicEase
} from 'babylonjs'

const animateCameraToPosition = (cam: Camera, newpos: Vector3) => {
  const ease = new CubicEase()
  ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT)
  Animation.CreateAndStartAnimation(
    'at5',
    cam,
    'position',
    45,
    200,
    cam.position,
    newpos,
    0,
    ease
  )
}

export default animateCameraToPosition
