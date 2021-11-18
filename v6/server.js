var http = require("http");
var url = require("url");
var path = require('path');

var express = require("express");
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname + 'pageLogin')));


function start(route, handle) {
    function onRequest(request, response) {
        var pathname = url.parse(request.url).pathname;
        app.get(pathname,route(handle, pathname, response))
        console.log("Request for " + pathname + " received.");
        //route(handle, pathname, response);


        
    }
    http.createServer(app).listen(8888);
    console.log("Server has started.");
}
exports.start = start;
// exports.app = app;