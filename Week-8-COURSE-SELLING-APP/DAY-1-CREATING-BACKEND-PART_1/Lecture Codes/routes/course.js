import { Router } from "express"

const courseRouter = Router();


courseRouter.post("/purchase", function(req, res){          //this routes for user jo purchase krega courses
    res.json({
        message: "Signup endpoint"
    })
})

courseRouter.get("/", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {
    courseRouter: courseRouter
}
