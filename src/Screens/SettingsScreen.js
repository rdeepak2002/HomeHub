import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/SettingsScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

const soundManager = new SoundManager(false)

class SettingsScreen extends Component {

  constructor(props) {
    super(props)
    soundManager.playBtnSound()
  }

  render() {
    return (
      <div className="screen">
        <h2 className="settingsTitle">SETTINGS</h2>
        <a className="closeBtn" href="/#/home">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>
        <div className="btnContainer">
          <button onClick={this.update}>Update</button>
          <button onClick={this.reboot}>Reboot</button>
          <button onClick={this.shutdown}>Shutdown</button>
          <a href="/#/">Lock</a>
        </div>
      </div>
    )
  }

  update = () => {
    soundManager.playBtnSound()

    let data = {}

    data.command = 'git pull'

    let xmlhttp = new XMLHttpRequest()
    let theUrl = 'http://localhost:8080/command'

    xmlhttp.open('POST', theUrl)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))

    xmlhttp.onload  = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          let obj = JSON.parse(xmlhttp.responseText)

          this.updateClient(obj.message.trim())
        } else {
          console.error(xmlhttp.statusText)
          console.log(2)
          alert('Error contacting server.')
        }
      }
    }

  }

  updateClient = (serverUpdateStatus) => {
    let data = {}

    data.command = 'git -C ../HomeHub/ pull'

    let xmlhttp = new XMLHttpRequest()
    let theUrl = 'http://localhost:8080/command'

    xmlhttp.open('POST', theUrl)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))

    xmlhttp.onload  = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          let obj = JSON.parse(xmlhttp.responseText)

          if(obj.message.trim() === 'Already up to date.' && serverUpdateStatus  === 'Already up to date.') {
            alert(obj.message)
          }
          else {
            this.reboot()
          }

        } else {
          console.error(xmlhttp.statusText)
          console.log(2)
          alert('Error contacting server.')
        }
      }
    }
  }

  reboot = () => {
    soundManager.playBtnSound()

    let data = {}

    data.command = 'sudo reboot'

    let xmlhttp = new XMLHttpRequest()
    let theUrl = 'http://localhost:8080/command'

    xmlhttp.open('POST', theUrl)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))

    xmlhttp.onload  = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          let obj = JSON.parse(xmlhttp.responseText)
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
    soundManager.playBtnSound()

    let data = {}

    data.command = 'sudo shutdown -h now'

    let xmlhttp = new XMLHttpRequest()
    let theUrl = 'http://localhost:8080/command'

    xmlhttp.open('POST', theUrl)
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')
    xmlhttp.send(JSON.stringify(data))

    xmlhttp.onload  = function (e) {
      if (xmlhttp.readyState === 4) {
        if (xmlhttp.status === 200) {
          let obj = JSON.parse(xmlhttp.responseText)
          alert(obj.message)
        } else {
          console.error(xmlhttp.statusText)
          console.log(2)
          alert('Error contacting server.')
        }
      }
    }
  }
}

export default SettingsScreen
