const express = require('express')      //similar to jaise hmlh fs ke time internal module use krte
const app = express()

app.get('/', function (req, res) {      //localhost:3000 pe yeh chalega get req krne se 
  res.send('Hello World')
  // res.send('Hello World')            // yeh hm do bar krenge toh it will give error 
})

app.get('/asd', function (req, res) {   //yeh localhost:3000/asd pe yeh chlega get req krne se
  res.send('Heyyy from asd endpoint')
})

app.post('/asd', function (req, res) {   //yeh localhost:3000/asd pe yeh chlega post req krne se 
  res.send('Hii from asd_post endpoint')
})

app.listen(3000)                        //This specifies the port number and yeh local host ko start rakhega as we can check this in postman too by checking the get req of localhost 3000