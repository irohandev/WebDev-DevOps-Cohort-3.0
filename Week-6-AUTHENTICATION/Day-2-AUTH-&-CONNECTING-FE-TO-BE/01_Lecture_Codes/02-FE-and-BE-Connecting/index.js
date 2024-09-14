const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "randomabc"

app.use(express.json())


const users = []


function logger (req, res,next){            //yeh el logger middleware bnay jo bta raha hai like which req is coming to the server 
    console.log(req.method + " - Request came !")
    next();
}

//
app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup",logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;


    users.push({
        username:username,
        password:password
    });
    res.json({
        message:"Signed in successfully!"
    });
})

app.post("/signin",logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    let foundUser =null;

    for (let i = 0; i < users.length; i++){
        if(users[i].username === username && users[i].password === password){
            foundUser = users[i]
        }        
    }

    if(!foundUser){
        res.json({
            message:"Invalid Credentials"
        })
    }
    else{
        const token = jwt.sign({
            username
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }

})

function auth(req, res, next) {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }
    
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);
        if (decodedData.username) {
            req.username = decodedData.username;
            next();
        } else {
            res.status(401).json({ message: "Invalid token" });
        }
    } catch (error) {
        res.status(401).json({ message: "Failed to authenticate token" });
    }
}


app.get("/me", logger, auth, function(req, res) {
    const foundUser = users.find(user => user.username === req.username);
    
    if (!foundUser) {
        return res.status(404).json({ message: "User not found" });
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    });
});


app.listen(3000);

