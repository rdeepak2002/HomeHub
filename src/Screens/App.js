import React from 'react'
import { Route, HashRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'

import '../Styles/stars.css'

const TITLE = 'HomeHub'

function App() {
  return (
    <HashRouter>
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div>
        <div className="starsContainer">
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>

        <div className="content">
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/settings" component={SettingsScreen}/>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
