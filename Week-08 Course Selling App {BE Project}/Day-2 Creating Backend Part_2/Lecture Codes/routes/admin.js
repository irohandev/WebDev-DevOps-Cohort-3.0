// Import the Router object from the express module to create route handlers
const {Router} = require("express");

// Create a new instance of Router for defining admin-related routes
const adminRouter = Router();

// Import adminModel and courseModel from the database folder to interact with admin and course data
const {adminModel} = require("../db");

const{adminMiddleware} = require ("../middleware/admin")
// Import the required dependencies 
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const z = require("zod");
const {JWT_ADMIN_PASSWORD} = require("../config")

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


// Define the admin routes for creating a course
adminRouter.post("/course", adminMiddleware, async function(req,res) {
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Validate the request body data using zod schema
    const requireBody = z.object({
        title: z.string().min(3),
        description: z.string().min(10),
        imageUrl: z.string().url(),
        price: z.number().positive(),
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

    // Get title, description, imageURL, price from the request body
    const {title,description,imageUrl,price} = req.body;

    // Create a new course with the given title, description, imageURL, price, creatorId
    const course = await courseModel.create({
        title:title,
        description:description,
        imageUrl:imageUrl,
        price:price,
        creatorId:adminId,
    });

    // Respond with a success message if the course is created successfully
    res.status(201).json({
        message: "Course Created",
        courseId: course._id,
    });
});

adminRouter.put("/course", adminMiddleware, async function(req,res) {
    // Get the adminId from the request object, set by the admin middleware
    const adminId = req.userId;

    // Define a schema using zod to validate the request body for updating a course
    const requireBody = z.object({
        courseId: z.string().min(5), // Ensure course ID is at least 5 characters
        title: z.string().min(3).optional(), // Title is optional
        description: z.string().min(5).optional(), // Description is optional
        imageUrl: z.string().url().min(5).optional(), // Image URL is optional
        price: z.number().positive().optional(), // Price is optional
    });

    // Parse and validate the incoming request body against the schema
    const parseDataWithSuccess = requireBody.safeParse(req.body);

    // If validation fails, respond with an error message and the details of the error
    if(!parseDataWithSuccess){
        return res.json({
            message: "Incorrect data format",
            error: parseDataWithSuccess.error,
        });
    }

    // Destructure the validated fields from the request body
    const {title,description,imageUrl,price,courseId} = req.body;

    // Attempt to find the course in the database using the provided courseId and adminId
    const course = await courseModel.findOne({
        _id: courseId, // Match the course by ID
        creatorId: adminId, // Ensure the admin is the creator
    });

    // If the course is not found, respond with an error message
    if(!course){
        return res.status(404).json({
            message: "Course not found!", // Inform the client that the specified course does not exist
        });
    }

    // Update the course details in the database using the updates object
    await courseModel.updateOne({
        _id: courseId, // Match the course by ID
        creatorId: adminId, // Ensure the admin is the creator
    },
    {
        // It uses the provided courseId and adminId to identify the course. For each field (title, description, imageUrl, price), if a new value is provided, it is used to update the course. If a field is not provided, the existing value from the database is kept.
        title: title || course.title,
        description: description || course.description,
        imageUrl: imageUrl || course.imageUrl,
        price: price || course.price,
    });

    // Respond with a success message upon successful course update
    res.status(200).json({
        message: "Course updated!", // Successfully course updated or not
    });
});



// Define the admin routes for getting all courses
adminRouter.get("/course/bulk", adminMiddleware, async function(req,res){
    // Get the adminId from the request object
    const adminId = req.adminId;

    // Find all the courses with given creatorId
    const courses = await courseModel.find({
        creatorId: adminId,
    });

    // Respond with the courses if they are found successfully
    res.json({
        message: "Course Updated",
        courses: courses,
    });
});


module.exports = {
    adminRouter: adminRouter
}

