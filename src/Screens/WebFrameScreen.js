import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/WebFrameScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

const soundManager = new SoundManager()

class WebFrameScreen extends Component {
  render() {
    return (
      <div className="screen">
        <a onClick={soundManager.playBtnSound()} className="closeBtn" href="/#/">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>

        <div className="frameContainer">
          <iframe seamless="seamless" src="http://192.168.1.242"></iframe>
        </div>
      </div>
    )
  }
}

export default WebFrameScreen
