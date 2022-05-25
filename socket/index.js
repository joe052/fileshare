const express = require('express');
const app = express();
const http = require('http').Server(app);
const path = require('path');
const port = 5500;

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
});

var io = require("socket.io")(http);

//whenever there is a connection
io.on('connection',(socket)=>{
    console.log("A user connected");

    //send a message after a timeout of 4 seconds
    setTimeout(()=>{
        socket.send('Its been 4 seconds....');
    },4000);

    //using emit
    setTimeout(()=>{
        socket.emit('testerEvent',{description: 'A custom event of a certain description'});
    },40000);

    //whenever someone disconnects
    socket.on('disconnect',()=>{
        console.log("A user disconnected");
    });
});

http.listen(port,()=>{
    console.log("app is up and running...");
});