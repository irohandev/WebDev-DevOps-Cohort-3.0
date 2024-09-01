const express = require('express')      //similar to jaise hmlh fs ke time internal module use krte
const app = express()

app.get('/', function (req, res) {      //localhost:3000 pe yeh chalega 
  res.send('Hello World')
})
app.get('/asd', function (req, res) {   //yeh localhost:3000/asd pe yeh chlega 
  res.send('Heyyy from asd endpoint')
})

app.listen(3000)                        //This specifies the port number and yeh local host ko start rakhega as we can check this in postman too by checking the get req of localhost 3000