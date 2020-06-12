import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/LockScreen.css'

const soundManager = new SoundManager(true)

class LockScreen extends Component {
  constructor(props) {
    super(props)

    let date = new Date()
    let hour = date.getHours()
    if(hour === 0) {
      hour = 12
    }
    else if(hour>12) {
      hour = hour-12
    }
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let seconds = ("0" + date.getSeconds()).slice(-2)

    let hourString = ''+hour
    hourString = (hourString.length === 1 ? '0'+hourString : hourString)

    this.state = {
      hour: hourString,
      minutes: minutes,
      seconds: seconds
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      900
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    let date = new Date()
    let hour = date.getHours()
    if(hour === 0) {
      hour = 12
    }
    else if(hour>12) {
      hour = hour-12
    }
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let seconds = ("0" + date.getSeconds()).slice(-2)

    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(min === 0 && (sec === 0 || sec ===5)) {
      soundManager.playHour(''+date.getHours())
    }

    let hourString = ''+hour
    hourString = (hourString.length === 1 ? '0'+hourString : hourString)

    this.setState({
      hour: hourString,
      minutes: minutes,
      seconds: seconds
    })
  }

  render() {
    return (
      <div className="screen">
        <div class="lockContainer">
          <h1 className="hours">{this.state.hour}</h1>
          <h1 className="tic">:</h1>
          <h1 className="minutes">{this.state.minutes}</h1>
          <h1 className="tic">:</h1>
          <h1 className="seconds">{this.state.seconds}</h1>

          <a className="unlock" href="/#/home">‎‎ </a>
        </div>
      </div>
    )
  }
}

export default LockScreen
