import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/WebFrameScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

const soundManager = new SoundManager(false)

class WebFrameScreen extends Component {

  constructor(props) {
    super(props)
    soundManager.playBtnSound()
  }

  render() {
    const fullURL = window.location.href
    const streamURL = fullURL.substring(fullURL.indexOf('streamURL=')+10, fullURL.length)

    return (
      <div className="screen">
        <a className="closeBtn" href="/#/home">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>

        <div className="frameContainer">
          <h1 className="loadingText">loading</h1>
          <iframe title="streamoptions" frameBorder="0" src={streamURL}>Browser not compatible.</iframe>
        </div>
      </div>
    )
  }
}

export default WebFrameScreen
