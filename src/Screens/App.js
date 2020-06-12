import React, { Component } from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'
import WebFrameScreen from './WebFrameScreen'
import PrinterScreen from './PrinterScreen'
import LockScreen from './LockScreen'

import '../Styles/stars.css'
import '../Styles/gradients.css'

const TITLE = 'HomeHub'

class App extends Component {
  constructor(props) {
    super(props)

    let date = new Date()
    let hour = ''+date.getHours()

    hour = (hour.length===1 ? '0'+hour : hour )

    this.state = {
      gradient: 'sky-gradient sky-gradient-' + hour
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      60000
    )
  }

  tick() {
    let date = new Date()
    let hour = ''+date.getHours()

    hour = (hour.length===1 ? '0'+hour : hour )

    this.setState({
      gradient: 'sky-gradient sky-gradient-' + hour
    })
  }

  render() {
    return (
      <HashRouter>
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
        <div className={this.state.gradient}>
          <div className="starsContainer">
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>
          </div>

          <div className="content">
            <Route exact path="/" component={LockScreen}/>
            <Route path="/home" component={HomeScreen}/>
            <Route path="/settings" component={SettingsScreen}/>
            <Route path="/stream" component={WebFrameScreen}/>
            <Route path="/printer" component={PrinterScreen}/>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
