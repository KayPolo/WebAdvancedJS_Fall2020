// Node works using modules.
// Some, like http, ship with it. But you still need to require them.
var http = require('http');

// request, response
http.createServer(function (req, res) {

	//Sends a response header to the request - 200 Means everything is OK - 404 means page not found
	res.writeHead(200, {'Content-Type': 'text/plain'});
	//
	res.end('Who let the dogs out');
}).listen(1337, "127.0.0.1");

console.log('Server running at http://127.0.0.1:1337/');