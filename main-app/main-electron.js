const electron = require('electron');
const app = electron.app; // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.
var globalShortcut = electron.globalShortcut;
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', () => {
	// On OS X it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	//if (process.platform != 'darwin') {
	app.quit();
	//}
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', () => {
	// Create the browser window.1050, 700
	this.mainWindow = mainWindow = new BrowserWindow({ width: 1050, height: 700 });

	// and load the index.html of the app.
	mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

	mainWindow.on('ready-to-show', function () {
		setTimeout(() => {
			mainWindow.show();
		}, 100)
	});

	mainWindow.on('close', () => {
		mainWindow.webContents.send('close')
	})


	// Emitted when the window is closed.
	mainWindow.on('closed', () => {
		// Dereference the window object, usually you would store windows
		// in an array if your app supports multi windows, this is the time
		// when you should delete the corresponding element.
		mainWindow = null;
	});
});