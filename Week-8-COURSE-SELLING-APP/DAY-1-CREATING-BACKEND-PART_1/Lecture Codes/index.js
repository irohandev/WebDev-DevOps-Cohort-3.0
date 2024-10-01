const  express = require ("express")
const app = express();


app.post("/course/purchase", function(req, res){          //this routes for user jo purchase krega courses
    res.json({
        message: "Signup endpoint"
    })
})

app.get("/courses", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

app.listen(3000);
