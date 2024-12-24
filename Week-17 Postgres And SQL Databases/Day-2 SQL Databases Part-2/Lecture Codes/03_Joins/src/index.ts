// Importing the Client class from the "pg" (node-postgres) library for interacting with PostgreSQL
import { Client } from "pg";

// Importing the Express framework for building a web server
import express from "express";

// Initializing the Express application
const app = express();

// Middleware to parse JSON request bodies, enabling the server to read incoming JSON payloads
app.use(express.json());

// Creating a PostgreSQL client instance with the database connection string
const pgClient = new Client("YOUR URL");

// Connecting to the PostgreSQL database
pgClient.connect();

// Setting up a POST endpoint for user signup
app.post("/signup", async (req, res) => {
    // Extracting user data from the request body
    const username = req.body.username; // Username provided by the user
    const password = req.body.password; // Password provided by the user
    const email = req.body.email;       // Email address provided by the user
    const city = req.body.city;         // City provided by the user
    const country = req.body.country;   // Country provided by the user
    const street = req.body.street;     // Street provided by the user
    const pincode = req.body.pincode;   // Pincode provided by the user

    try {
        // SQL query to insert user data into the "users" table and return the generated user ID
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id;`;

        // Executing the query with parameterized inputs to prevent SQL injection
        const insertResponse = await pgClient.query(insertQuery, [username, email, password]);

        // Extracting the generated user ID from the query response
        const userId = insertResponse.rows[0].id;

        // SQL query to insert address data into the "addresses" table, associating it with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;

        // Executing the query with parameterized inputs
        await pgClient.query(addressQuery, [city, country, street, pincode, userId]);

        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully", // Success message sent to the client
        });
    } catch (error) {
        // Logging any errors that occur during database operations
        console.log(error);

        // Sending an error response to the client
        res.json({
            message: "Error while signing up", // Error message sent to the client
        });
    }
});

// Setting up a GET endpoint to retrieve metadata about a user
app.get("/meta-data", async (req, res) => {
    try {
        // Extracting the user ID from the query parameters
        const id = req.query.id;

        // SQL query to fetch user and address details using a JOIN between "users" and "addresses" tables
        const query = `
            SELECT 
                users.id, 
                users.username, 
                users.email, 
                addresses.city, 
                addresses.country, 
                addresses.street, 
                addresses.pincode 
            FROM users 
            JOIN addresses ON users.id = addresses.user_id 
            WHERE users.id = $1;
        `;

        // Executing the query with the provided user ID
        const response = await pgClient.query(query, [id]);

        // Sending the fetched data as a JSON response
        res.json(response.rows);
    } catch (error) {
        // Logging any errors during the metadata retrieval process
        console.log(error);

        // Sending an error response to the client
        res.status(500).json({
            message: "Error fetching metadata", // Error message sent to the client
        });
    }
});

// Starting the Express server on port 3000
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000"); // Log message to confirm the server is running
});

// For Output use this: http://localhost:3000/meta-data?id=1

/*
WORKFLOW EXPLANATION:

1. Server Setup
   - Import necessary libraries (pg for PostgreSQL and express for building a server).
   - Initialize an Express application and set up middleware to parse JSON request bodies.
   - Connect to a PostgreSQL database using the provided connection string.

2. User Signup Endpoint (/signup)
   - Receives user details (username, email, password, and address fields) via a POST request.
   - Inserts user data (username, email, password) into the users table and retrieves the generated user ID.
   - Inserts address data (city, country, street, pincode) into the addresses table, associating it with the retrieved user ID.
   - Sends a success message to the client if all operations complete successfully.
   - Handles errors and sends an error message if any database operation fails.

3. Metadata Retrieval Endpoint (/meta-data)
   - Accepts a user ID via query parameters in a GET request.
   - Fetches user details (username, email) and associated address details (city, country, street, pincode) using a SQL JOIN query.
   - Sends the retrieved data as a JSON response to the client.
   - Handles errors and sends an error message if metadata retrieval fails.

4. Error Handling
   - Catches database errors during both user signup and metadata retrieval.
   - Logs errors for debugging and provides appropriate responses to the client.

5. Server Start
   - Starts the Express server on port 3000.
   - Logs a message indicating the server is running and provides the base URL for testing.
*/
