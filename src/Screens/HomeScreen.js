import React, { Component } from 'react'
import '../Styles/HomeScreen.css'
import settingsGlyph from '../Images/settings-solid.svg'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <a className="settingsBtn" href="/#/settings">
          <img src={settingsGlyph} alt="settings" width="100px" height="100px"></img>
        </a>
        <div className="cameraContainer">
          <img src="http://192.168.1.242:8081/" alt="stream" className="stream"></img>
          <img src="http://octopi.local/webcam/?action=stream1" alt="stream" className="stream"></img>
        </div>
      </div>
    )
  }
}

export default HomeScreen
