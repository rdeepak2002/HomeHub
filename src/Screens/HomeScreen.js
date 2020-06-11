import React, { Component } from 'react'
import '../Styles/HomeScreen.css'
import settingsGlyph from '../Images/settings-solid.svg'

class HomeScreen extends Component {
  playBtnSound = () => {
    var audio = new Audio('../Sounds/button.mp3')
    audio.play()
    alert('playing sound')
  }

  render() {
    return (
      <div class="screen">
        <a onClick={this.playBtnSound} className="settingsBtn" href="/#/settings">
          <img class="invertSVGColor" src={settingsGlyph} alt="settings" width="70px" height="70px"></img>
        </a>
        <div className="cameraContainer">
          <iframe title="stream1" src="http://192.168.1.242/picture/1/frame/"></iframe>
        </div>
      </div>
    )
  }
}

export default HomeScreen
