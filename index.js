var express = require('express');
var app = express();
var path = require('path');


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    console.log(req.ip + ' GET ' + '[' + res.statusCode + '] /');
});

app.get(/^(.+)$/, function(req, res) {
    res.sendFile(__dirname + req.params[0]);
    console.log(req.ip + ' GET ' + '[' + res.statusCode + '] ' + req.params[0])
});

console.log("Servidor corriendo en http://localhost:8000")
app.listen(8000);