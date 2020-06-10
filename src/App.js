import React from 'react'
import './App.css'
import { Route, NavLink, HashRouter } from 'react-router-dom'

import HomeScreen from './Screens/HomeScreen'
import SettingsScreen from './Screens/SettingsScreen'

function App() {
  return (
    <HashRouter>
      <div>
        <div className="content">
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/settings" component={SettingsScreen}/>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
