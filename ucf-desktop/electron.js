import { app, BrowserWindow, Menu } from 'electron/main'

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })

  // win.loadFile('dist/index.html')
  win.loadURL('http://localhost:5173')

  // const menu = Menu.buildFromTemplate([
  //   {
  //     label: "OpenUCF Desktop",
  //     submenu: [
  //       { type: "normal", label: "About OpenUCF Desktop", click: () => {
  //         const aboutwin = new BrowserWindow({
  //           width: 400,
  //           height: 600,
  //         })
  //         aboutwin.loadURL('http://localhost:5173?page=about')
  //       } },
  //       { type: 'separator' },
  //       { role: 'services' },
  //       { type: 'separator' },
  //       { role: 'hide' },
  //       { role: 'hideOthers' },
  //       { role: 'unhide' },
  //       { type: 'separator' },
  //       { role: 'quit' }
  //     ]
  //   },
  //   {
  //     label: "File",
  //     submenu: [
  //       { type: "normal", label: "New", click: () => { } },
  //       { type: "normal", label: "Open", click: () => { } },
  //       { type: "normal", label: "Save", click: () => { } },
  //       { type: "normal", label: "Save As", click: () => { } },
  //       { type: 'separator' },
  //       { role: 'quit' }
  //     ]
  //   }
  // ])

  // Menu.setApplicationMenu(menu)
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})