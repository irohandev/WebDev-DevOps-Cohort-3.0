const express = require("express");

const app = express();

app.use(express.json())

app.post("/sum", function  sumHandler(req, res) {

    console.log(req.body);          //This will show output as UNDEFINED but jaise hi yeh external middleware use krenge then yeh body ka value jo hm postman app pe jakr body mein add krenge toh woh dikhayega 

    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    
    res.json({
        ans: a+b
    });
});

app.listen(3000)