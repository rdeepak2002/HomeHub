import React from 'react'
import { Route, HashRouter } from 'react-router-dom'

import HomeScreen from './HomeScreen'
import SettingsScreen from './SettingsScreen'

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
