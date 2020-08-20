const { app, BrowserWindow } = require('electron');

let window;
let appIcon = `${__dirname}/icon.png`;

function createWindow () {
  // Create the browser window.
  window = new BrowserWindow({
    width: 800, 
    height: 600,
    backgroundColor: '#2e2c29',
    // frame: false,
    autoHideMenuBar:true,
    icon: appIcon
  })


  window.loadURL(`file://${__dirname}/dist/index.html`)

  //// uncomment below to open the DevTools.
  // win.webContents.openDevTools()

  // Event when the window is closed.
  window.on('closed', function () {
    window = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (window === null) {
    createWindow()
  }
})

