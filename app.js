var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;


// =======

app.get('/', function(req, res, next) { res.send('Hello world!'); });
var options = {
    debug: true
}

var http = require("http");
setInterval(function() {
    http.get("https://hustmess-server.herokuapp.com/");
}, 300000); // every 5 minutes (300000)

var server = require('http').createServer(app);
var peerserver = ExpressPeerServer(server, options);

app.use('/peerjs', peerserver);

server.listen(process.env.PORT || 9000,() => {
    console.log('Server is listening on port 9000')
});

// ========
