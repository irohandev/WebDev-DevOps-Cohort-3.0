// Import the dotenv module to load environment variables from the .env file
require("dotenv").config();

// Import express for building the web server and mongoose for MongoDb interaction
const express = require("express");
const mongoose = require("mongoose");

// Import the route handlers for user, course, admin from the routes folder
const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const {adminRouter} = require("./routes/admin");

// Initialize express application
const app = express();

// Retrieve the PORT from the .env file, default to 3000 if its not provided
const PORT = process.env.PORT || 3001;

// Middleware to automatically parse incoming JSON requests and make it available in req.body
app.use(express.json());

// Retrieve the MongoDB connection string (MONGO_URL) from the .env file
const MONGO_URL = process.env.MONGO_URL;
console.log(MONGO_URL);


// So any routes defined in userRouter, courseRouter, adminRouter will be accessed through these
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/admin", adminRouter);

// Create a main function to connect to the database and start the server
// MongoDB connection string (replace with your actual URL)
async function main() {
  try {
      // Connect to the MongoDB database using the MONGODB_URL
      await mongoose.connect(MONGO_URL);

      // Log a success message to the console if the database connection is established
      console.log("Connected to the database");

      // Start the server and listen for incoming requests on the specifies PORT
      app.listen(3000, () => {
        // Log a message to indicate that the server is running and listening for requests
        console.log("Server is running on port 3000");
      });
} catch(e){
    // Log an error message if the connection to the database fails
    console.error("Failed to connect to the database", e);
    }
}

// Call the main function to initialize the server and database connection
main();