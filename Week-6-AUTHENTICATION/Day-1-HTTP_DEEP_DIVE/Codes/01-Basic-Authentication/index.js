const express = require('express');
const app = express();

app.use(express.json())

const users = []                                         //empty global array for storing the username, password, token 

function generateToken() {
    let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    let token = "";                                     //isko empty rakhe hai phle
    for (let i = 0; i < 32; i++) {
        // use a simple function here
        token += options[Math.floor(Math.random() * options.length)];           //idhar se woh ek random token create krega 32 bits k 
    }
    return token;
}

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({                                        //yeh global users array mein push kr diye
        username,
        password
    })
    res.send({
        message:"You have signed up"
    })
    console.log(users);
    
});


app.post("/signin", (req, res) => {
    //username aur password input liye 
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;                               //isko intialize krwa diye null

    for (let i = 0; i < users.length; i++) {            //yeh check kr rha if woh username or passwords phle se exist toh nahi krta 
        if(users[i].username == username && users[i].password == password){
            foundUser = users[i]                        //agar exist krta hai toh foundUser mein add kr dega 
        }
    }
    if(foundUser){
        const token = generateToken();              //yaha token k liye generateToken ko call kr diya
        foundUser.token = token;
        res.json({
            token: token
        })
    }
    else{                                           //aur username ya password nhi found hoga toh invalid bta dega
        res.status(403).send({
            message:"Invalid username or password"
        })
    }

    console.log(users);
    
});

app.listen(3000);