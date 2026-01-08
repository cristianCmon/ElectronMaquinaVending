const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    obtenerProductos: () => ipcRenderer.invoke('get-productos'),
    obtenerCambio: () => ipcRenderer.invoke('get-cambio')
});