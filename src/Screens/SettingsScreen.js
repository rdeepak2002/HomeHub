import React, { Component } from 'react'
import '../Styles/SettingsScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

class SettingsScreen extends Component {
  reload = () => {
    window.location.reload(false)
    alert("TODO: create server to manage this request")
  }

  render() {
    return (
      <div className="screen">
        <h2 className="settingsTitle">SETTINGS</h2>
        <a className="closeBtn" href="/#/">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>
        <div className="btnContainer">
          <button onClick={this.reload}>Reload</button>
        </div>
      </div>
    )
  }
}

export default SettingsScreen
