const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "MaiNahiBataunga"
const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://admin:rohandev123@cluster0.wm8zj.mongodb.net/todo-app")                 //.net/DATABASE_Name - idhar agar koi new database k name add krenge toh woh create kr dega aur existing mein chahiye toh uska name add kr do 

const app = express()

app.use(express.json())                         //body ko parse krne k liye chahiye hota hai yeh

app.post("/signup", async function(req, res){
    const email = req.body.email;               //yaha body pe req ja rha hai isliye eisko parse krna hai 
    const password = req.body.password;
    const name = req.body.name;
    
    await UserModel.create({                    //isko await isliye kiye may be error ho skta hai like user idhar input diya nhi but res.json se message phle mil jaye isliye isko await kiye jisse woh phle data le le phr woh res.json ka message show krega..warna await ni krenge toh then if database connect nhi hoga phr bhi woh message return kr dega 
        email: email,
        password: password,
        name: name
    })

    res.json({
        message: "you are logged in! "
    })
    
});

app.post("/signin", async function(req, res){
    const email = req.body.email;
    const password = req.body.password;

    const user = await UserModel.findOne({              //userModel se search krega ki yeh username & password...and usko user variable pe store krega and isko bhi await krwana pdega ..kyuki all database call had to be awaited 
        email: email,
        password: password
    })

    if(user){                                           //if uses is there ..then generate the jwt token
        const token = jwt.sign({
            id: user._id.toString()                      //sare users ka ek id hoga User collection mai jo sabke liye alg hoga ..isliye is barr hmlog user._id ko sign krenge aur token generate idhar se krwaynge...aur isko string mein convert kr rhe hai..kyuki id mongoDb mein object ID hota hai 
        }, JWT_SECRET);
        res.json({
            token: token
        });
    }
    else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});


//jaise hi middleware sab kuch pass kr dega so the controll will reach here in todo and todos routes
app.post("/todo", auth, async function(req, res){          //Yeh todos ko add krne ke liye hai 
    const userId = req.userId;                      //middleware ke pass se jo req.userId jispe decodedData ka id hai woh idhr pass on hua 
    const title = req.body.title                    //yaha se title input denge 
    await TodoModel.create({                        //database call isliye await kiye
        title,                                      //TodoModel wale collection mein yeh create ho jyega 
        userId,
        done
    })
    res.json({
        message: "Todo created!"
    })
});

app.get("/todos", auth, async function(req, res){           //yeh kaunsa todo kis user ka hai woh return krne k liye..ki like kaunsa userId pe kya kya todo hai yeh btayega woh
    const userId = req.userId;                              //middleware ke pass se jo req.userId jispe decodedData ka id hai woh idhr pass on hua 
    
    const todos = await TodoModel.find({                    //userId se woh todos ko search kr lega for this specific id provided to it
        userId
    })
    
    res.json({
        todo                                                //todos jo milnge woh output pe milenge 
    })

});

function auth(req, res, next){                              //same auth fucntion which was used before 
    const token = req.headers.token

    const decodedData = jwt.verify(token, JWT_SECRET)

    if(decodedData){
        req.userId = decodedData.id;                         //User Id ko decodedData se le rhe hia idhar 
        next();
    }
    else{
        req.status(403).json({
            message: "Incorrect Credentials !"
        })
    }
}


app.listen(3000);