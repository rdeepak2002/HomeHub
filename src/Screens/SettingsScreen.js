import React, { Component } from 'react'
import UIfx from 'uifx'
import '../Styles/SettingsScreen.css'
import closeGlyph from '../Images/cross-solid.svg'
import buttonSoundFile from '../Sounds/button.mp3'
const buttonSound = new UIfx(buttonSoundFile)

class SettingsScreen extends Component {
  render() {
    return (
      <div className="screen">
        <h2 className="settingsTitle">SETTING</h2>
        <a className="closeBtn" href="/#/">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>
        <div className="btnContainer">
          <button onClick={this.update}>Update</button>
          <button onClick={this.reboot}>Reboot</button>
          <button onClick={this.shutdown}>Shutdown</button>
        </div>

        <audio className="audio-element">
          <source src="/Sounds/button.mp3"></source>
        </audio>
      </div>
    )
  }

  playBtnSound = () => {
    buttonSound.setVolume(0.05).play()
  }

  update = () => {
    this.playBtnSound()
    let rebootFunc = this.playBtnSound()

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

          if(obj.message.trim() == 'Already up to date.') {
            alert(obj.message)
          }
          else {
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

        } else {
          console.error(xmlhttp.statusText)
          console.log(2)
          alert('Error contacting server.')
        }
      }
    }
  }

  reboot = () => {
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
