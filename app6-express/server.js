const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static("express"));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/home.html'));
});

app.get('/home', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/home.html'));
});

app.get('/upload', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/upload.html'));
})

app.get('/find', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/find.html'));
})

app.get('/show', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/show.html'));
})

app.get('/login', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/index.html'));
})

app.get('/logout', function (req, res) {
  res.sendFile(path.join(__dirname + '/express/index.html'));
})

app.get('*',function (req, res) {
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.write("404: Resource not found");
  res.end();
 });

const server = http.createServer(app);
const port = 8888;
server.listen(port);
console.debug('Server listening on port ' + port);