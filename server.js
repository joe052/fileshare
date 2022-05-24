const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.listen(port,()=>{
  console.log(`App listening at port ${port}`);
});

app.get('/',(req,res)=>{
  res.send('Project successfully running at server...');
});