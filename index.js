const { app, BrowserWindow, ipcMain } = require('electron')
const { MongoClient } = require('mongodb');
const path = require('path'); 

const uri = "mongodb+srv://cristianxp_db_user:wpZqcQKcnUl4kGk4@cluster0.mdf0qyj.mongodb.net/";
const client = new MongoClient(uri);
let db;

async function connectDB() {
    try {
        await client.connect();
        db = client.db("mvending"); // Nombre de tu DB
        console.log("Conectado a MongoDB Atlas");
    } catch (e) {
        console.error("Error al conectar a MongoDB Atlas:", e);
    }
}

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    frame: false,            // Hide the title bar and native frame
    resizable: false,        // Disable resizing
    autoHideMenuBar: true,
    
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  // win.setMenu(null);

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  connectDB()
  createWindow()
})

// Manejar eventos IPC (Comunicación entre main y renderer)
ipcMain.handle('get-productos', async () => {
    try {
        const collection = db.collection('productos');
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error("Error al obtener productos:", error);
        throw error;
    }
});

ipcMain.handle('get-cambio', async () => {
    try {
        const collection = db.collection('cambio');
        const result = await collection.find().toArray();
        return result;
    } catch (error) {
        console.error("Error al obtener cambio:", error);
        throw error;
    }
});


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