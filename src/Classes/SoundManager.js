import UIfx from 'uifx'

import buttonSoundFile from '../Sounds/button.mp3'

export default class SoundManager {

  constructor(name, socketRoom, isTeacher) {
    this.buttonSound = new UIfx(buttonSoundFile)
    this.buttonSound.setVolume(0.05)
  }

  playBtnSound() {
    this.buttonSound.play()
  }
}
