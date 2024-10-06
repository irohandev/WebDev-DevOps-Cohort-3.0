/*
No need to do this as of now onwards!
// Import express module
const express = require("express");
// Create a new Router instance for user routes
const Router = express.Router;
*/

// Import the Router object from the express module to create route handlers
const {Router} = require("express");

// Create a new instance of the Router for defining user-related routes
const userRouter = Router();

//import the required dependencies 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const z = require("zod");
const { userModel } = require("../db");


//Post router for user to Signup
userRouter.post("/signup", async function(req, res){      

    //input validation using zod 
    const requiredBody = z.object({
        email: z.string().min(3).max(100).email(),
        password: z.string().min(3).max(100),
        firstName: z.string().min(3).max(30),
        lastName: z.string().min(3).max(30),
    });

    // Parse the request body using the requireBody.safeParse() method to validate the data format
    // "safe" parsing (doesn't throw error if validation fails)
    const parsedDataSuccess = requiredBody.safeParse(req.body);         

    //If data is not correct then yeh response return kr do
    if(!parsedDataSuccess.success){                     
        res.json({
            message: "Incorrect Format",
            error: parsedDataSuccess.error
        })
        return
    }

    // Extract validated email, password, firstName, and lastName from the request body
    const {email, password, firstName, lastName} = req.body;

    // Hash the user's password using bcrypt with a salt rounds of 5
    const hashedPassword = await bcrypt.hash(password, 5)
    
    // Creating a new user in the database
    try{
        // Create a new user entry with the provided email, hashed password, firstName, lastName
        await userModel.create({
            email,
            password: hashedPassword,
            firstName,
            lastName,   
        });
    } catch(e){
        // If there is an error during user creation, return a error message
        return res.status(400).json({
            // Provide a message indicating signup failure
            message: "You are already signup",
        });
    }

    res.json({
        message: "Signed up Successfull"
    });
});

userRouter.post("/signin", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})


userRouter.get("/purchases", function(req, res){           //this routes for user ne jo purchase kiya hua hai uske liye
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {                          //isko export kr diye jaise react mein krte hai us trike se 
    userRouter: userRouter
}