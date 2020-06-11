import React, { Component } from 'react'
import '../Styles/HomeScreen.css'
import settingsGlyph from '../Images/settings-solid.svg'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <a className="settingsBtn" href="/#/settings">
          <img src={settingsGlyph} alt="settings" width="70px" height="70px"></img>
        </a>
        <div className="cameraContainer">

          <iframe src="http://192.168.1.242/picture/1/frame/"></iframe>
          <iframe src="http://octopi.local/webcam/?action=stream1"></iframe>
        </div>
      </div>
    )
  }
}

export default HomeScreen

// <video controls autoplay width="640" height="480">
//   <source src="http://192.168.1.242/picture/1/frame/" type="application/x-mpegURL"></source>
// </video>

// <img src="http://192.168.1.242:8081/" alt="stream" className="stream"></img>
// <img src="http://octopi.local/webcam/?action=stream1" alt="stream" className="stream"></img>
