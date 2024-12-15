// Importing the required modules and functions from Mongoose
import mongoose, { model, Schema } from "mongoose";

// Connecting to the MongoDB database using a connection string
// Replace "password12345" with your actual database password for security
mongoose.connect("mongodb+srv://Admin:password12345@cluster1.wm8zj.mongodb.net/second_brain");

// Defining a schema for the 'User' collection
// Each user will have a unique 'username' and a 'password'
const UserSchema = new Schema({
    username: { type: String, unique: true }, // Unique username to ensure no duplicates
    password: { type: String }               // Password for the user
});

// Creating a model for the 'User' collection, enabling interactions with the database
export const UserModel = model("User", UserSchema);

// Defining a schema for the 'Content' collection
// Each content will have a 'title', a 'Link', an array of 'tags', and a reference to a 'userId'
const ContentSchema = new Schema({
    title: String,                          // Title of the content
    Link: String,                           // URL or link to the content
    tags: [{ type: mongoose.Types.ObjectId, ref: "tag" }], // Array of tag IDs, referencing the 'tag' collection
    userId: [{ 
        type: mongoose.Types.ObjectId, 
        ref: "User", 
        required: true                       // The 'userId' field is mandatory to link content to a user
    }],
});

// Creating a model for the 'Content' collection to interact with the database
export const ContentModel = model("Content", ContentSchema);
