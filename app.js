const {app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
    const url = require("url");
    const path = require("path");

    let mainWindow

    ipcMain.handle('loadRecipes', async (event, arg) => {
      const userDatePath = app.getPath('userData');
      const FILE_NAME = 'recipe-data'
      this.path = path.join(userDatePath, `${FILE_NAME}.json`);
      
      fs.writeFileSync(this.path, '', { flag: 'a' });
      const data = fs.readFileSync(this.path);
      
      return data.length > 0? JSON.parse(data) : null
    });

    ipcMain.handle('saveRecipes', async (event, data) => {
      const userDatePath = app.getPath('userData');
      const FILE_NAME = 'recipe-data'
      this.path = path.join(userDatePath, `${FILE_NAME}.json`);
    
      fs.writeFileSync(this.path, JSON.stringify(data));
      return 'OK';
    });

    function createWindow () {
      mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
          nodeIntegration: true,
          nodeIntegrationInWorker: true,
          backgroundThrottling: false,
          enableRemoteModule: true,
          contextIsolation: false,
        }
      })

      mainWindow.loadURL(
        url.format({
          pathname: path.join(__dirname, `/dist/food-app/index.html`),
          protocol: "file:",
          slashes: true
        })
      );
      // Open the DevTools.
      //mainWindow.webContents.openDevTools()

      mainWindow.on('closed', function () {
        mainWindow = null
      })
    }

    app.on('ready', createWindow)

    app.on('window-all-closed', function () {
      if (process.platform !== 'darwin') app.quit()
    })

    app.on('activate', function () {
      if (mainWindow === null) createWindow()
    })