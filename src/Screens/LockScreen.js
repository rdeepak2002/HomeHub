import React, { Component } from 'react'

import '../Styles/LockScreen.css'

class LockScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      time: new Date().toLocaleString()
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
    this.setState({
      time: new Date().toLocaleString()
    })
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
