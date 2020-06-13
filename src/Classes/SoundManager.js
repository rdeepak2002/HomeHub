import UIfx from 'uifx'

import buttonSoundFile from '../Sounds/button.mp3'

import t0  from '../Sounds/0.mp3'
import t1  from '../Sounds/1.mp3'
import t2  from '../Sounds/2.mp3'
import t3  from '../Sounds/3.mp3'
import t4  from '../Sounds/4.mp3'
import t5  from '../Sounds/5.mp3'
import t6  from '../Sounds/6.mp3'
import t7  from '../Sounds/7.mp3'
import t8  from '../Sounds/8.mp3'
import t9  from '../Sounds/9.mp3'
import t10 from '../Sounds/10.mp3'
import t11 from '../Sounds/11.mp3'
import t12 from '../Sounds/12.mp3'
import t13 from '../Sounds/13.mp3'
import t14 from '../Sounds/14.mp3'
import t15 from '../Sounds/15.mp3'
import t16 from '../Sounds/16.mp3'
import t17 from '../Sounds/17.mp3'
import t18 from '../Sounds/18.mp3'
import t19 from '../Sounds/19.mp3'
import t20 from '../Sounds/20.mp3'
import t21 from '../Sounds/21.mp3'
import t22 from '../Sounds/22.mp3'
import t23 from '../Sounds/23.mp3'

export default class SoundManager {
  constructor(needsTime) {
    let date = new Date()

    this.volume = 0.04
    this.buttonSound = new UIfx(buttonSoundFile)
    this.lastTimeSoundPlayed = date.getTime()
    this.voices = speechSynthesis.getVoices()


    if(needsTime) {
      this.timeHash={
        "0"  : new UIfx(t0) ,
        "1"  : new UIfx(t1) ,
        "2"  : new UIfx(t2) ,
        "3"  : new UIfx(t3) ,
        "4"  : new UIfx(t4) ,
        "5"  : new UIfx(t5) ,
        "6"  : new UIfx(t6) ,
        "7"  : new UIfx(t7) ,
        "8"  : new UIfx(t8) ,
        "9"  : new UIfx(t9) ,
        "10" : new UIfx(t10),
        "11" : new UIfx(t11),
        "12" : new UIfx(t12),
        "13" : new UIfx(t13),
        "14" : new UIfx(t14),
        "15" : new UIfx(t15),
        "16" : new UIfx(t16),
        "17" : new UIfx(t17),
        "18" : new UIfx(t18),
        "19" : new UIfx(t19),
        "20" : new UIfx(t20),
        "21" : new UIfx(t21),
        "22" : new UIfx(t22),
        "23" : new UIfx(t23)
      }
    }
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

  playHour(hour) {
    this.timeHash[hour].setVolume(1.0).play()
  }

  speak(text) {
    alert(text)
  }
}
