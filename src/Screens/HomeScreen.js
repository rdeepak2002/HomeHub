import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/HomeScreen.css'
import printerGlyph from '../Images/printer-solid.svg'
import settingsGlyph from '../Images/settings-solid.svg'
import wrenchGlyph from '../Images/wrench-solid.svg'

const soundManager = new SoundManager(false)

class HomeScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    soundManager.playBtnSound()
  }

  render() {
    return (
      <div className="screen">
        <a className="settingsBtn" href="/#/settings">
          <img className="invertSVGColor" src={settingsGlyph} alt="settings" width="70px" height="70px"></img>
        </a>

        <a className="printerBtn" href="/#/printer">
          <img className="invertSVGColor" src={printerGlyph} alt="printer" width="70px" height="70px"></img>
        </a>

        <div className="cameraContainer">
          <h1 className="loadingText">loading</h1>
          <div>
            <iframe title="stream1" frameBorder="0" src="https://toktokapp.duckdns.org/">Browser not compatible.</iframe>
            <a className="optionsOverlay" href="/#/stream?streamURL=http://192.168.1.242/">
              <img className="invertSVGColor" src={wrenchGlyph} alt="options" width="50px" height="50px"></img>
            </a>
          </div>

        </div>
      </div>
    )
  }
}

export default HomeScreen
