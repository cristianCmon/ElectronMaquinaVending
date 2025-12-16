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


let parentWindow;
let modalWindow;
const crearModal = () => {
  parentWindow = new BrowserWindow({ width: 800, height: 600 }); // Ventana principal
  
  modalWindow = new BrowserWindow({
    parent: parentWindow, // Vincula la modal a la ventana padre
    modal: true,        // La convierte en modal
    show: false,        // No la muestra inmediatamente
    width: 400,
    height: 300
  });

  modalWindow.loadFile('modal.html'); // Carga el HTML de tu modal

  modalWindow.once('ready-to-show', () => {
    modalWindow.show(); // Muestra la ventana cuando esté lista
  });

  modalWindow.on('closed', () => {
    modalWindow = null;
  });
}