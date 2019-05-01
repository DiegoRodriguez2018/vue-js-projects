const express = require('express')

// creating an express instance
const cookieSession = require('cookie-session')  
const bodyParser = require('body-parser')  
const port = 3000;
const cors = require('cors');

const app = express();  
// app.set('trust proxy', 1); 

app.use(cors());
// getting the local authentication type
//initializing body parser
app.use(bodyParser.json())

//initializing cookie session
app.use(cookieSession({
  name: 'session',
  keys: ["secretkeys"],
  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/', (req,res)=>{
  req.session.info = "just a test";
  res.send('cookie was set')
});

// Staring the express server
app.listen(port, () => {  
  console.log(`Example app listening on port ${port}`)
})