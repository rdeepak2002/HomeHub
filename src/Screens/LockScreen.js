import React, { Component } from 'react'

import '../Styles/LockScreen.css'

class LockScreen extends Component {
  constructor(props) {
    super(props)

    let date = new Date()
    let hours = ("0" + (date.getHours()%12===0 ? 12 : date.getHours()-12)).slice(-2)
    let minutes = date.getMinutes()
    let seconds = ("0" + date.getSeconds()).slice(-2)
    let time = hours + ':' + minutes + ':' + seconds
    let morning = (date.getHours()>11 ? false : true)

    this.state = {
      time: time,
      hours: hours,
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
    let hours = ("0" + (date.getHours()%12===0 ? 12 : date.getHours()-12)).slice(-2)
    let minutes = date.getMinutes()
    let seconds = ("0" + date.getSeconds()).slice(-2)
    let time = hours + ':' + minutes + ':' + seconds
    let morning = (date.getHours()>11 ? false : true)

    this.setState({
      time: time,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    })
  }

  render() {
    return (
      <div className="screen">
        <div class="lockContainer">
          <h1 className="hours">{this.state.hours}</h1>
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
