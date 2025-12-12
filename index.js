const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: false,            // Hide the title bar and native frame
    resizable: false,        // Disable resizing
    autoHideMenuBar: true,
    webPreferences: {
            nodeIntegration: true
        }
  })

  // win.setMenu(null);

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})