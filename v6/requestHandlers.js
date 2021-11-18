var exec = require("child_process").exec;
var fs = require('fs');

function start(response) {
    console.log("Request handler 'start' was called.");
    setTimeout(function () {
        response.writeHead(200, { "Content-Type": "text/html" });
        //response.write("Hello start");
        //response.sendFile('./pageLogin/index.html');
        fs.readFile('./pageLogin/index.html',null, function(error,data){
            if(error){
                response.writeHead(404);
                response.write('File not found');
            }else{
                response.write(data);
            }
            response.end();
        });
        
    }, 000);
}
function find(response) {
    console.log("Request handler 'start' was called.");
    exec("dir /",
        { timeout: 10000, maxBuffer: 20000 * 1024 },
        function (error, stdout, stderr) {
            response.writeHead(200, { "Content-Type": "text/plain" });
            console.log("# error"+error);
            console.log("# stdout"+stdout);
            console.log("# stderr"+stderr);
            response.write(stdout);
            response.end();
        });
}
function upload(response) {
    console.log("Request handler 'upload' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello Upload");
    response.end();
}
function show(response) {
    console.log("Request handler 'show' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello show");
    response.end();
}
function login(response) {
    console.log("Request handler 'login' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello login");
    response.end();
}
function logout(response) {
    console.log("Request handler 'start' was called.");
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.write("Hello logout");
    response.end();
}
exports.start = start;
exports.upload = upload;
exports.find = find;
exports.show = show;
exports.login = login;
exports.logout = logout;
