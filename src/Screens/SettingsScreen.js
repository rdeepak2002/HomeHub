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
      <div>
        <h2 className="settingsTitle">SETTINGS</h2>
        <a className="closeBtn" href="/#/">
          <img src={closeGlyph} alt="close" width="100px" height="100px"></img>
        </a>
        <button onClick={this.reload}>Reload</button>
      </div>
    )
  }
}

export default SettingsScreen
