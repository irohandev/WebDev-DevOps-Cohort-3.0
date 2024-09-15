const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const JWT_SECRET = "randomabc"

app.use(express.json())


const users = []


function logger (req, res,next){            //yeh ek logger middleware bnay jo bta raha hai like which req is coming to the server..aur yeh hamare terminal pe btayega ki kaunsa req aa rha hai 
    console.log(req.method + " - Request came !")
    next();
}

//
app.get("/", function(req, res){            //frontend part ko idhar se connect kr diya like jaise hi localhost:3000 search krenge backend server strt krne ke badd then woh yeh file ko return krega 
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup",logger, function(req, res){          //signup ke liye route..axios jo hmlog use kiye FE pe woh idhar se data ko le lega fetch krega data yaha se 
    
    //username and password yaha se input le rha hai woh jo user provide kr rha hai 
    const username = req.body.username;
    const password = req.body.password;


    users.push({                                        //yeh gobal array pe data store kr diye hai..uspe yeh datas push krke 
        username:username,
        password:password
    });
    res.json({
        message:"Signed in successfully!"
    });
})


app.post("/signin", logger, function(req, res){         //signin ke liye yeh route...sigin wla axios yaha se data fetch krega 
    
    //username and password yaha se input lega 
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;                               //pehle isko null rakhe hai ekdm empty

    for (let i = 0; i < users.length; i++) {            //yeh users array se search kr rha hai jo ki yaha ke input upar wle input se kaunse wle se match kr rha hai..usko founUser pe store krna hai
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];                       //yaha store kiya hai
        }
    }

    if (!foundUser) {                                   //agra foundUser nahi hai toh yeh status show kr do message de do         
        return res.status(401).json({ 
            message: "Invalid Credentials" 
        }); // Send 401 status for invalid credentials
    } 
    else {                                              //aur agar hai then jwt se usko sign kro means encode kro apne secret key se 
        const token = jwt.sign({ 
            username
        }, JWT_SECRET);

        res.json({ 
            token: token                                //aur yeh token return kr do
        });
    }
});


function auth(req, res, next) {
    const token = req.headers.token;                    //header se token lega yeh aur token variable pe store kr rha hai
    if (!token) {                                       //agar token nahi hai toh ..yeh status code aur message show kr do
        return res.status(401).json({ message: "Token is missing" });
    }
    

    //aur yha try catch kro ki try kro yeh wrna error ayega toh yeh
    try {
        const decodedData = jwt.verify(token, JWT_SECRET);      //yaha se token se woh username ko nikal rhe hai jo phle hmlg encode kiye the isliye same secret key se verify kr rhe ki kya hai wahi username hai ya nahi
        if (decodedData.username) {                             //aur if decodedData.username hai toh yeh kro
            req.username = decodedData.username;                //yeh req.username pe isliye store kiye hai decodedData ko isliye kyuki req aur res abko access kr skte toh yeh data sabhi pe easily pass ho jaye
            next();                                             //aur yeh niche wle method ko call kr diya 
        } else {                                                //aur woh decodedData nhi hua toh yeh return kro
            res.status(401).json({ message: "Invalid token" });
        }
    } catch (error) {                                           //warna kuch error aye toh yeh status and message return kr do 
        res.status(401).json({ message: "Failed to authenticate token" });
    }
}


app.get("/me", logger, auth, function(req, res) {
    const foundUser = users.find(user => user.username === req.username);           //yeh loop ki trah hai middleware se pass hue req.username ko leke check rha hai..arrow function hai ki function agrument pe user diye aur usse chcek kr rhe user.username wahi req.username hai ki nahi aur usko foundUser pe store kr diye hai
    
    if (!foundUser) {                                                   //agar foundUser nhi hai toh yeh status show kro message ke sath
        return res.status(404).json({ message: "User not found" });
    }

    res.json({                                                          //and if its there then return this data as a response of it.
        username: foundUser.username,
        password: foundUser.password
    });
});


app.listen(3000);

