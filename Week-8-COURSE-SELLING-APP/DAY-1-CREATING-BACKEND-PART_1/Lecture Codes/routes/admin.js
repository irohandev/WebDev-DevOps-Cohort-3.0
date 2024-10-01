const { Router } = require("express")        
const adminRouter = Router();
const {adminModel} = require("../db")

adminRouter.post("/signup", function(req, res){      //ab userRouter bana chuke hai aur routing kiye hai toh we don't have access of app so userRouter use krenge uske jgah pe 
    res.json({
        message: "Signup endpoint"
    })
})

adminRouter.post("/signin", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}
