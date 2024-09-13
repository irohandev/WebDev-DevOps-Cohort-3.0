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
});

app.get("/me", function(req,res){               //Created an authenticated EP which  returns the user their information only if they send their token
    const token = req.headers.token              //Jo meta data mein hmlg kuch kuch cookies snd krte hai wahi header ke andar hoga woh token bhi jyega 
    let foundUser = null;

    // Searches the users array for a user whose token matches the token from the request header. If a match found, that user object is stored in foundUser
    for (let i = 0; i < users.length; i++) {
        if(users[i].token == token){
            foundUser =users[i]
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


/*
Notes:
- Phle postman mein jayenge udhar localhost:3000/signup mein post req se do teen input denge username password ka body mein json object ke andar..
- Phir localhost:3000/signin mein jaynge aur post req krke uspe post req pe jo input diye gye username password jo diye hai usse usko snd req krenge toh ek token milega 
- phir localhost:3000/me mein jaynge aur then headers pe jayenge aur add krenge token ko aur jo token generate kiye hue hai usko copy paste kr denge headers mein token mein aur req send krenge jisse woh jis bhi username oassword ka token hai woh mko output mein return krega 
*/
