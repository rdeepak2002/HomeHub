import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Screens/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
