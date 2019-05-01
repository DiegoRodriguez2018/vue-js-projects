const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const port = 3500;

app.post('/file-upload', (req,res)=>{
  console.log(req.body);
  res.send('File was uploaded');
})

app.listen(port, ()=>{
  console.log(`Listening on port ${port}`);
});