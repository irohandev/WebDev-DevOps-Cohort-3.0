// Importing PrismaClient to interact with the Prisma ORM and Express for building the server
import { PrismaClient } from "@prisma/client";
import express from "express";

// Initialize PrismaClient and Express app
const client = new PrismaClient();
const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Route to get all users from the database
app.get("/users", async (req, res) => {
    // Fetch all users from the 'user' table
    const users = await client.user.findMany();
    // Send the fetched users as a JSON response
    res.json(users);
})

// Route to get a user's todos based on their ID
app.get("/todos/:id", async (req, res) => {
    // Extract user ID from the URL parameter
    const id = req.params.id;
    // Find the user with the given ID and include their todos, username, and password
    const users = await client.user.findFirst({
        where: {
            id: parseInt(id) // Convert the ID from string to integer
        },
        select: {
            todos: true,  // Fetch the user's todos
            username: true, // Fetch the user's username
            password: true  // Fetch the user's password
        }
    });
    // Send the user data as a JSON response
    res.json(users);
})

// Function to read a specific user and their todos (for testing or logging purposes)
async function readUser() {
    // Fetch a user with ID 7 and include their todos
    const user = await client.user.findFirst({
        where: {
            id: 7
        },
        include: {
            todos: true  // Include the user's todos in the result
        }
    });
    // Log the fetched user data to the console
    console.log(user);
}

// Call the readUser function to execute it
readUser();

// Start the Express server on port 3000
app.listen(3000);


/*
Function to create multiple users in the database
The function uses Prisma's createMany method to insert multiple user records at once
Each user has properties like username, password, age, and city
async function createUser() {
  
    await client.user.createMany({
        data: [{
            username: "Alice", // Username of the first user
            password: "1234",   // Password of the first user
            age: 20,            // Age of the first user
            city: "New York"    // City of the first user
        },
        {
            username: "Bob",    // Username of the second user
            password: "12345",  // Password of the second user
            age: 25,            // Age of the second user
            city: "San Francisco" // City of the second user
        }]
    })
}
createUser();

Function to delete a user from the database based on their ID
This uses Prisma's delete method to remove a user
async function deleteUser() {
  
    await client.user.delete({
        where: {
            id: 1 // ID of the user to delete (in this case, user with ID 1)
        }
    })
}
deleteUser();

Function to update an existing user's data in the database
It uses Prisma's update method to modify a user's information
async function UpdateUser() {
  
    await client.user.update({
        where: {
            id: 1 // Find the user with ID 1
        },
        data: {
            username: "GKSingh", // Update the user's username to "GKSingh"
        }
    })
}
UpdateUser();

*/


