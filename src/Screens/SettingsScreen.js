import React, { Component } from 'react'
import '../Styles/SettingsScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

class SettingsScreen extends Component {
  reboot = () => {
    var data = {}

    data.command = 'sudo reboot'

    var xmlhttp = new XMLHttpRequest()
    let theUrl = 'http://localhost:8080/command'

    xmlhttp.open('POST', theUrl)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))

    xmlhttp.onload  = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          alert(obj.message)
        } else {
          console.error(xmlhttp.statusText)
          console.log(2)
          alert('Error contacting server.')
        }
      }
    }
  }

  shutdown = () => {
    var data = {}

    data.command = 'sudo shutdown -h now'

    var xmlhttp = new XMLHttpRequest()
    let theUrl = 'http://localhost:8080/command'

    xmlhttp.open('POST', theUrl)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))

    xmlhttp.onload  = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          let obj = JSON.parse(xmlhttp.responseText);
          alert(obj.message)
        } else {
          console.error(xmlhttp.statusText)
          console.log(2)
          alert('Error contacting server.')
        }
      }
    }
  }

  render() {
    return (
      <div className="screen">
        <h2 className="settingsTitle">SETTINGS</h2>
        <a className="closeBtn" href="/#/">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>
        <div className="btnContainer">
          <button onClick={this.reboot}>Reboot</button>
          <button onClick={this.shutdown}>Shutdown</button>
        </div>
      </div>
    )
  }
}

export default SettingsScreen
