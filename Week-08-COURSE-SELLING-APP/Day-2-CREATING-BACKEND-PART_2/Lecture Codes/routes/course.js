// Import the Router obejct from the express module to create router handlers
const {Router} = require("express");

// Create a new instance of the router for defining course related routes
const courseRouter = Router();

// Import purchaseModel and courseModel from the database folder to interact with purchase and course data
const {purchaseModel, courseModel} = require("../db");

// Import userMiddleware to authenticate and authorize users before allowing access to routes
const {userMiddleware} = require("../middleware/user");

// Define a POST route for purchasing a course, with user authentication middleware 
courseRouter.post("/purchase", userMiddleware, async function(req,res) {
    // Extract userId from the request object, which was set by the userMiddleware
    const userId = req.userId;

    // Extract courseId from the request body send by the client
    const courseId = req.body.courseId;

    // If courseId is not provided in the request body, return a error response to the client
    if(!courseId){
        return res.status(400).json({
            message: "Please provide a courseId",
        });
    }

    // Check if the user has already purchased the course by quering the purchaseModel with courseId and userId
    const existingPurchase = await purchaseModel.findOne({
        courseId: courseId,
        userId: userId,     
    });

    // If the user has already purchased the course, return a error response to the client
    if(existingPurchase){
        return res.status(400).json({
            message:"You have already bought this course",
        });
    }

    // Try to create a new purchase entry in the database with the provided courseId and userId
    await purchaseModel.create({
        courseId: courseId, // The ID of the course being purchased
        userId: userId, // The ID of the user making the purchase
    });

    // If the purchase is successful, return a status with a success message to the client
    res.status(201).json({
        message: "You have successfully bought the course"
    });
});

// Define the GET route for previewing course details without authentication
courseRouter.get("/preview", async function(req,res) {
    // Query the database to get all the courses available for purchase
    const courses = await courseModel.find({});

    // Return the queried course details as a JSON response to the client with a status code
    res.status(200).json({
        courses: courses, // Send the course details back to the client
    });
});

// Export the courseRouter so it can be imported and used in other parts of the application
module.exports = {
    courseRouter: courseRouter
}; 