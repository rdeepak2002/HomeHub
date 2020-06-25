import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/PrinterScreen.css'
import closeGlyph from '../Images/cross-solid.svg'

const soundManager = new SoundManager(false)

class PrinterScreen extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    soundManager.playBtnSound()
  }

  render() {
    return (
      <div className="screen">
        <a className="closeBtn" href="/#/home">
          <img className="invertSVGColor" src={closeGlyph} alt="close" width="80px" height="60px"></img>
        </a>

        <div className="frameContainer">
          <h1 className="loadingText">loading</h1>
          <iframe title="printer" frameBorder="0" src="http://octopi.local/">Browser not compatible.</iframe>
        </div>
      </div>
    )
  }
}

export default PrinterScreen
