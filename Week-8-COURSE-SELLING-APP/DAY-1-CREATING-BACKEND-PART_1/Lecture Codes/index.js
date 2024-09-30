const  express = require ("express")
const app = express();

app.post("/user/signup", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

app.post("/user/signin", function(req, res){
    res.json({
        message: "Signin endpoint"
    })
})


app.get("/user/purchases", function(req, res){           //this routes for user ne jo purchase kiya hua hai uske liye
    res.json({
        message: "Signin endpoint"
    })
})

app.post("/user/purchase", function(req, res){          //this routes for user jo purchase krega courses
    res.json({
        message: "Signin endpoint"
    })
})

app.get("/courses", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

app.listen(3000);
