let express = require("express");

let socket = require("socket.io");

let app = express();

let server = app.listen(5000, () => {
    console.log("Server running on PORT: 5000")
});



app.use(express.static("public"));

let io = socket(server);

io.on('connection', (socket) => {

    console.log("Socket is working", socket.id)

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data)
    })



})