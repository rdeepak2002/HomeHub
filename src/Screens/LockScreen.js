import React, { Component } from 'react'
import SoundManager from '../Classes/SoundManager'

import '../Styles/LockScreen.css'

const soundManager = new SoundManager(true)

class LockScreen extends Component {
  constructor(props) {
    super(props)

    let date = new Date()
    let hour = ("0" + (date.getHours()%12===0 ? 12 : date.getHours()-12)).slice(-2)
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let seconds = ("0" + date.getSeconds()).slice(-2)
    let isMorning = (date.getHours()>11 ? false : true)

    this.state = {
      hour: hour,
      minutes: minutes,
      seconds: seconds
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  tick() {
    let date = new Date()
    let hour = ("0" + (date.getHours()%12===0 ? 12 : date.getHours()-12)).slice(-2)
    let minutes = ("0" + date.getMinutes()).slice(-2)
    let seconds = ("0" + date.getSeconds()).slice(-2)
    let isMorning = (date.getHours()>11 ? false : true)

    let min = date.getMinutes()
    let sec = date.getSeconds()

    if(min === 0 && (sec === 0 || sec ===5)) {
      soundManager.playHour(''+date.getHours())
    }

    this.setState({
      hour: hour,
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
