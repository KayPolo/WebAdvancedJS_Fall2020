//Make Connection

//This socket variable is a new variable that doesn't have anything to do with the one that we declared in the server side
//However, we do have access to the functions from the server
//This is going to connect the front end with the index.js file and wait for the connection to be established
var socket = io.connect('http://localhost:4000');


var message = document.getElementById('message'),
handle = document.getElementById('handle'),
btn = document.getElementById('send'),
output = document.getElementById('output'),
feedback = document.getElementById('feedback');;

btn.addEventListener('click',()=>{
    //the emit function takes two parameters: how do you wanna call it and what do you want to emit
    //we're sending an object to the server, therefore, {}
    socket.emit('chat', {
        message:message.value,
        handle:handle.value
    })

    
})

message.addEventListener('keypress', ()=>{
    socket.emit('typing',handle.value)
})


//Listen for events

socket.on('chat',(data)=>{
    //Once the text is sent we can clean the browser
    feedback.innerHTML = "";

    output.innerHTML += "<p><strong>"+ data.handle +": </strong>"+ data.message+"</p>"
});


socket.on('typing',(data)=>{
    feedback.innerHTML = "<p><em>"+ data +" is typing a message... </em></p>"
});


