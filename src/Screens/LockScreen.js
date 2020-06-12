import React, { Component } from 'react'

import '../Styles/LockScreen.css'

class LockScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: this.formatAMPM(new Date())
    }
  }
  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.state = {
      time: this.formatAMPM(new Date())
    }
  }

  formatAMPM(date) {
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let ampm = hours >= 12 ? 'pm' : 'am'
    hours = hours % 12
    hours = hours ? hours : 12
    minutes = minutes < 10 ? '0'+minutes : minutes
    let strTime = hours + ':' + minutes + ' ' + ampm
    return strTime
  }


  render() {
    return (
      <div className="screen">
        <h1 className="time">{this.state.time}</h1>
        <a className="unlock" href="/#/home">‎‎ </a>
      </div>
    )
  }
}

export default LockScreen
