import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/HomeScreen.css'
import settingsGlyph from '../Images/settings-solid.svg'
import wrenchGlyph from '../Images/wrench-solid.svg'

const soundManager = new SoundManager()

class HomeScreen extends Component {
  render() {
    return (
      <div className="screen">
        <a onClick={soundManager.playBtnSound()} className="settingsBtn" href="/#/settings">
          <img className="invertSVGColor" src={settingsGlyph} alt="settings" width="70px" height="70px"></img>
        </a>
        <div className="cameraContainer">
          <div>
            <iframe title="stream1" src="http://192.168.1.242/picture/1/frame/"></iframe>
            <a onClick={soundManager.playBtnSound()} className="optionsOverlay" href="/#/stream">
              <img className="invertSVGColor" src={wrenchGlyph} alt="options" width="50px" height="50px"></img>
            </a>
          </div>

        </div>
      </div>
    )
  }
}

export default HomeScreen
