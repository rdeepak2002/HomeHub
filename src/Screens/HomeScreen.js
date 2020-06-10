import React, { Component } from 'react'
import '../Styles/HomeScreen.css'
import settingsGlyph from '../Images/settings-solid.svg'

class HomeScreen extends Component {
  render() {
    return (
      <div>
        <a class="settingsBtn" href="/#/settings">
          <img width="100px" height="100px" src={settingsGlyph}></img>
        </a>
        <div class="cameraContainer">

        </div>
      </div>
    )
  }
}

export default HomeScreen
