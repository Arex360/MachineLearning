const {app,BrowserWindow} = require('electron');
const url = require('url');
app.on('ready',function(){
    var win = new BrowserWindow();
    win.loadURL(url.format({
        pathname: "index.html",
        slashes: true
    }))
})