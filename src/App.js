import React from 'react';
import './App.css';
import { Route, NavLink, HashRouter } from 'react-router-dom'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'

function App() {
  return (
    <HashRouter>
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li><a href="/#/">HomeScreen</a></li>
          <li><a href="/#/settings">Settings</a></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={HomeScreen}/>
          <Route path="/settings" component={SettingsScreen}/>
        </div>
      </div>
    </HashRouter>
  )
}

export default App
