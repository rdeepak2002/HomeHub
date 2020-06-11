import UIfx from 'uifx'

import buttonSoundFile from '../Sounds/button.mp3'

export default class SoundManager {
  constructor() {
    let date = new Date()

    this.volume = 0.02
    this.buttonSound = new UIfx(buttonSoundFile)
    this.lastTimeSoundPlayed = date.getTime()
  }

  playBtnSound() {
    const throttle = 250
    let date = new Date()

    if(date.getTime()-this.lastTimeSoundPlayed>throttle) {
      this.buttonSound.setVolume(this.volume).play()
      this.playingSFX = true
      this.lastTimeSoundPlayed = date.getTime()
    }
  }
}
