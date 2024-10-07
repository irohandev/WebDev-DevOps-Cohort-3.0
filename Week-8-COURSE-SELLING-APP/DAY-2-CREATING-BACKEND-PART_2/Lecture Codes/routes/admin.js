// Import the Router object from the express module to create route handlers
const {Router} = require("express");

// Create a new instance of Router for defining admin-related routes
const adminRouter = Router();

// Import adminModel and courseModel from the database folder to interact with admin and course data
const {adminModel} = require("../db");
// Import the required dependencies 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const z = require("zod");

const JWT_ADMIN_PASSWORD = "Random123@"

adminRouter.post("/signup", async function(req, res){      

    // Input validation using zod 
    const requiredBody = z.object({
        email: z.string().email().min(5), // Email must be a valid format and at least 5 characters
        password: z.string().min(5), // Password must be at least 5 characters
        firstName: z.string().min(3), // First name must be at least 3 characters
        lastName: z.string().min(3), // Last name must be at least 3 characters
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
        await adminModel.create({
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
        message: "Sign-up Successfull"
    });
});
// POST route for admin signin
adminRouter.post("/signin", async function(req, res){

    // Validate the request body data using zod schema(email,password must be valid)
    const requireBody = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    // Parse and validate the request body data
    const parseDataWithSuccess = requireBody.safeParse(req.body);
    // If the data format is incorrect, send an error message to the client
    if(!parseDataWithSuccess){
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Get the email and password from the request body
    const {email,password} = req.body;
    
    // Find the admin with the given email
    const admin = await adminModel.findOne({
        email:email,
    });

    // If the admin is not found, send an error message to the client
    if(!admin){
        return res.status(403).json({
            message: "Invalid credentials",
        });
    }

    // Compare the password with the hashed password using the bcrypt.compare() method
    const passwordMatched = await bcrypt.compare(password, admin.password);

    // If password matches, generate a jwt token and return it
    if(passwordMatched){
        // Create a jwt token with the admin's id and the secret key
        const token = jwt.sign({
            id: admin._id
        }, JWT_ADMIN_PASSWORD);

        // Send the token to the client
        res.status(200).json({
            token:token,
        });
    }else{
        // If the password does not match, send an error message to the client
        res.status(403).json({
            message: "Invalid credentials!"
        });
    }
});


adminRouter.post("/course", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})
adminRouter.put("/course", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})
adminRouter.post("/course/bulk", function(req, res){
    res.json({
        message: "Signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter
}
