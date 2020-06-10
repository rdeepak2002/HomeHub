import React, { Component } from 'react'
import '../Styles/SettingsScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

class SettingsScreen extends Component {
  render() {
    return (
      <div>
        <h2 className="settingsTitle">SETTINGS</h2>
        <a className="closeBtn" href="/#/">
          <img src={closeGlyph} alt="close" width="100px" height="100px"></img>
        </a>
      </div>
    )
  }
}

export default SettingsScreen
