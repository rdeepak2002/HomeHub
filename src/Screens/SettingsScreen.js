import React, { Component } from 'react'
import '../Styles/SettingsScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

const electron = window.require('electron')
const {getCurrentWindow} = electron.remote

class SettingsScreen extends Component {
  reload = () => {
    getCurrentWindow().reload()
    alert("App has been reloaded.")
  }

  render() {
    return (
      <div class="screen">
        <h2 className="settingsTitle">SETTINGS</h2>
        <a className="closeBtn" href="/#/">
          <img class="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>
        <div class="btnContainer">
          <button onClick={this.reload}>Reload</button>
        </div>
      </div>
    )
  }
}

export default SettingsScreen
