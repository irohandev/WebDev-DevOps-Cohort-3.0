const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "randomabc"

app.use(express.json())


const users = []


function logger (req, res,next){            //yeh ek logger middleware bnay jo bta raha hai like which req is coming to the server 
    console.log(req.method + " - Request came !")
    next();
}



app.post("/signup",logger, function(req, res){
    const username = req.body.username;
    const password = req.body.password;


    users.push({
        username:username,
        password:password
    });
    res.json({
        meassage:"Signed in successfully!"
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

function auth(req, res, next){              //And this is the authentication middleware jaise pichle wale mein hmlog localhost:3000/me mtln get wle mein sab yeh authentication wla kaam kr rhe the jo username, password return kr rha tha yha woh kam yeh kr rha hai as a middleware 
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next()
    }
    else{
        res.json({
            message: "You are not logged in!"
        })
    }
}


app.get("/me",logger, auth, function(req, res){

    let foundUser = null;

    for (let i = 0; i< users.length; i++) {
        if(users[i].username === req.username){             //yaha req.username kiye hai aur decodedData.username nhi kiye hai kyuki req.username middleware se pass hokr is wale get method me aa rha hai 
            foundUser = users[i]
        }
    }

    res.json({
        username: foundUser.username,
        password: foundUser.password
    })
})

app.listen(3000);


// Notes:
// - Jitne bhi middleware hote yeh sare same req aur res use krte hai...isliye hmlg line 66 mein req.username mein decodedData.username ko store kr diye hai aur ussi ko niche wle get route mein add kr diye line 82 mein jisse woh username share ho pa rha hai..so aise hi yahi se we can pass dat through the middleware to next method or the get route