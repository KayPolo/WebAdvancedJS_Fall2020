var express = require("express");
//This is a secondary step
var socket = require("socket.io")

//App Setup
var app = express();

//Sever Setup
var server = app.listen(4000, function(){
    console.log("Listening in port 4000");
});


//Static Files
app.use(express.static("public")); //here we're specifing the folder 


//Socket setup 
// Here we're calling the function store in the variable socket. 
//It takes an argument, so we're passing the server, so it knows in what server shoud it work.
var io = socket(server);

//When any client connects to the server, the server is going to trigger a function
//when you run this, you will realize that nothing happens, and this is because you 
//have to set socket in the server and in the front-end
//we have to add the socket script to the html file (https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.3.0/socket.io.js)
//and we need to create out own js to contain the client code

io.on('connection', function(socket){
    console.log("Socket is actually working", socket.id);

    //OK, so once we send the message, we need to listen for it

    socket.on('chat',(data)=>{
        io.sockets.emit('chat',data)
    })

    socket.on('typing',(data)=>{
        //in this case, we use broadcast because we want to emit this message to every other 
        //single user
        socket.broadcast.emit('typing',data)
    })
});

//look into the console and you will realize that every time you refresh, the socket generates a unique id

// // New Syntax
// var io = socket(server);
// io.on('connection', (socket) => {

//     console.log('made socket connection', socket.id);

// });