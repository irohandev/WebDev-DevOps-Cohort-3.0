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

// Import the required dependencies 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const z = require("zod");
const { userModel } = require("../db");

const {JWT_USER_PASSWORD} = require("../config")

// Post router for user to Signup
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
        return res.json({
            message: "Incorrect Format",
            error: parsedDataSuccess.error
        })
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
    // Send a success response back to client indicating successfully singup
    res.json({
        message: "Signed up Successfull"
    });
});

// POST route for user signin
userRouter.post("/signin",async function(req, res){

    // Define the schema for validating the request body data using zod
    const requireBody = z.object({

        // Email must be a valid email format
        email: z.string().email(),

        // Password must be at least 6 character
        password: z.string().min(6)
    });
    // Parse adnd validate the incomng request body data
    const parsedDataWithSuccess = requireBody.safeParse(req.body);

    // If validation fails, return a error with the validation error details
    if(!parsedDataWithSuccess.success){
        return res.json({
            message: "Incorrect Data Fotrmat",
            error: parsedDataWithSuccess.error,
        });
    };

    // Extract validated email and password from the body
    const { email, password } = req.body
    const user = await userModel.findOne({
        email: email,
    });

    // If the user is not found, return a error indicating incorrect credentials
    if(!user){
        return res.status(403).json({
            message:"Incorrect Credentials !"
        });
    }

    // Compare the provided password with the stored hashed password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);

    // If the password matches, create a jwt token and send it to the client
    if(passwordMatch){

        // Create a jwt token using the jwt.sign() method
        const token = jwt.sign({
            id: user._id
        }, JWT_USER_PASSWORD);

        // Send the generated token back to client
        res.json({
            token:token,
        });

    }else{
        // If the password does not match, return a error indicating the invalid credentials
        res.status(403).json({
            // Error message for failed password comparison
            message:"Invalid credentials!"
        })
    }
});

// Define the GET route
userRouter.get("/purchases", userMiddleware, async function(req,res) {
    const userId = req.userId;
    const purchases = await purchaseModel.find({
        userId: userId,
    })

    if(!purchases){
        return res.status(404).json({
            // Error message for no purchases found
            message:"No purchases found",
        });
    }

    // If purchases are found, extract the courseIds from the found purchases
    const purchasesCourseIds = purchases.map((purchase) => purchase.courseId);

    // Find all course details associated with the courseIds
    const courseData = await courseModel.find({
        _id: {$in:purchasesCourseIds}, 
    });

    // Send the purchases and corresponding course details back to the client
    res.status(200).json({
        purchases,
        courseData,
    });
});



module.exports = {
    userRouter: userRouter
};