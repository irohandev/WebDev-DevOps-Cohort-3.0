// Importing necessary modules
import express from "express";  // Express is a web framework for Node.js
import mongoose from "mongoose";  // Mongoose is an ODM (Object Data Modeling) library for MongoDB
import jwt from "jsonwebtoken";  // JWT is used for generating and verifying JSON Web Tokens
import { ContentModel, UserModel } from "./db";  // Importing models for users and content
import { JWT_SECRET } from "./config";  // Importing the secret key for JWT
import { userMiddleware } from "./middleware";  // Middleware to authenticate users

// Initialize the Express app
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to handle user signup
app.post("/api/v1/signup", async (req, res) => {
    // Extract username and password from the request body
    const username = req.body.username;
    const password = req.body.password;

    try {
        // Create a new user in the database
        await UserModel.create({
            username,
            password    
        });
        res.json({ message: "User Created" });  // Respond with success message
    } catch (e) {
        // Handle duplicate user error
        res.status(400).json({ message: "User Already Exist!" });
    }
});

// Route to handle user sign-in
app.post("/api/v1/signin", async (req, res) => {
    const username = req.body.username;  // Get username from request body
    const password = req.body.password;  // Get password from request body

    // Find the user in the database
    const existingUser = await UserModel.findOne({
        username,
        password,
    });

    if (existingUser) {
        // Generate a JWT token for the authenticated user
        const token = jwt.sign(
            { id: existingUser._id }, // Payload contains user ID
            JWT_SECRET  // Secret key to sign the token
        );
        res.json({ token });  // Send the token as response
    } else {
        // Handle invalid credentials
        res.status(400).json({ message: "Invalid Credentials!" });
    }
});

// Route to handle content creation
app.post("/api/v1/content", userMiddleware, async (req, res) => {
    const link = req.body.link;  // Get the content link from request body
    const type = req.body.type;  // Get the content type from request body
    const title = req.body.title;  // Get the content title from request body

    // Create a new content entry in the database
    await ContentModel.create({
        link,
        type,
        title,

        //@ts-ignore
        userId: req.userId,  // User ID is fetched from middleware
        tags: [],  // Initialize tags as an empty array
    });

    res.json({ message: "Content Created!" });  // Respond with success message
});

// Route to fetch all content for a user
app.get("/api/v1/content", userMiddleware, async (req, res) => {
    
    //@ts-ignore
    const userId = req.userId;  // User ID is fetched from middleware
    // Fetch all content associated with the user ID and populate username
    // The `populate` function is used to include additional details from the referenced `userId`.
    // For example, it will fetch the username linked to the userId.
    // Since we specified "username", only the username will be included in the result, 
    // and other details like password won’t be fetched.
    const content = await ContentModel.find({ userId: userId }).populate("userId", "username");
    res.json(content);  // Send the content as response
});

// Route to delete content
app.delete("/api/v1/content", userMiddleware, async (req, res) => {
    const contentId = req.body.contentId;  // Get the content ID from request body

    // Delete content that matches the content ID and is associated with the authenticated user
    await ContentModel.deleteMany({
        contentId,

        // @ts-ignore
        userId: req.userId,  // User ID is fetched from middleware
    });

    res.json({ message: "Content deleted" });  // Respond with success message
});

// Start the server and listen on port 3000
app.listen(3000);
