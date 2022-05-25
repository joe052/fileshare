const express = require('express');
const { Server } = require('socket.io');
const app = express();
const port = 3000;

const io = require('socket.io')(server);

app.use(express.static('public'));
app.listen(port,()=>{
  console.log(`App listening at port ${port}`);
});

app.get('/',(req,res)=>{
  res.send('Project successfully running at server...');
});