const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const fullscreen = true
const dev = false

let mainWindow

app.commandLine.appendSwitch('enable-speech-dispatcher')

function createWindow() {
  mainWindow = new BrowserWindow({width: 1024, height: 600, fullscreen: fullscreen, webPreferences: {nodeIntegration: true}})

  mainWindow.loadURL('http://localhost:3000')

  if(dev) {
    mainWindow.webContents.openDevTools()
  }

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})
