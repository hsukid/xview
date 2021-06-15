import { Scene } from 'babylonjs'
import nav from './nav'

const createBtn = (id: string, name: string, handle) => {
  const el = document.createElement('div')
  el.id = id
  el.className = 'btn'
  el.innerText = name

  el.onclick = handle

  return el
}

const createUI = (scene: Scene) => {
  const uibox = document.createElement('div')
  uibox.id = 'uibox'

  const keting = createBtn('keting', '客厅', () => nav.navToKeting(scene))
  const xuanguan = createBtn('xuanguan', '玄关', () => nav.navToXuanguan(scene))

  uibox.appendChild(keting)
  uibox.appendChild(xuanguan)

  document.body.appendChild(uibox)
}

export default createUI
