let http = require('http');

http.createServer(function(req, res) {

    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is my first Server")

}).listen(6574, "127.0.0.1");

console.log("Server running on http://127.0.0.1:6574")