const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "randomabc";                         // Should be a strong, secure secret
const app = express();

app.use(express.json())

const users = [];

app.post("/signup", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    })
    res.send({
        message:"You have signed up"
    })    
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
        const token = jwt.sign({                        //convert their username to jwt by using the .sign
            username: username                          //idhar jisko convert krna tha woh add krenge like meko username ko encode krna tha toh isliye i had added only username 
        }, JWT_SECRET);

        res.json({
            token: token,
            message: "Signed in"
        })
    }
    else{                                           //aur username ya password nhi found hoga toh invalid bta dega
        res.status(403).send({
            message:"Invalid username or password"
        })
    }    
});

app.get("/me", function(req,res){               //Created an authenticated EP which  returns the user their information only if they send their token
    
    const token = req.headers.token              //Now it will give out the JWT

    const decodedInformation = jwt.verify(token, JWT_SECRET);           //This will convert the jwt to username and verify it using the .verify and after verifying it will return the json object jispe username hoga 
    const username = decodedInformation.username;

    let foundUser = null;

    // Searches the users array for a user whose token matches the token from the request header. If a match found, that user object is stored in foundUser
    for (let i = 0; i < users.length; i++) {
        if(users[i].username == username){
            foundUser = users[i]
        }            
    }
    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    }
    else{
        res.json({
            message:"Token Invalid"
        })
    }
});

app.listen(3000);



