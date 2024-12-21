// Importing the Client class from the 'pg' module to interact with PostgreSQL.
import { Client } from "pg";

// Creating a new instance of the Client with a connection string for the PostgreSQL database.
const pgClient = new Client("postgresql://database%201_owner:aBE0Nlv3WnYC@ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech/database%201?sslmode=require");

// Alternative way to create the Client instance using an object for more flexibility (commented out here).
// const pgClient2 = new Client({
//     user: "database%201_owner", // Username for authentication
//     password: "aBE0Nlv3WnYC", // Password for authentication
//     port: "8080", // Port number for the database server
//     host: "ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech", // Database server host
//     database: "database%201", // Database name to connect to
//     ssl: true // Enabling SSL for secure communication
// });


// Connection string kaunse word ka matlab kya hai yeh rha explanation :- 
// The connection string includes:
//   - Protocol: `postgresql://`
//   - Username: `database%201_owner`
//   - Password: `aBE0Nlv3WnYC`
//   - Host: `ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech`
//   - Database name: `database%201`
//   - SSL mode: `sslmode=require` ensures the connection uses SSL for security.


// Defining an asynchronous function to handle the database operations.
async function main() {
    // Establishing the connection to the PostgreSQL database using the connect method.
    await pgClient.connect();

    // SQL query to create a new table called 'users' with specific columns.
    await pgClient.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL, 
            email VARCHAR(255) UNIQUE NOT NULL, 
            password VARCHAR(255) NOT NULL, 
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
    
    // SQL query to insert a new user record into the 'users' table.
    await pgClient.query(`
        INSERT INTO users (username, email, password)
        VALUES ('Rohan Dev', 'rohan@gmail.com', '123456789')
    `);
    // SQL query to insert another user record into the 'users' table.
    await pgClient.query(`
        INSERT INTO users (username, email, password)
        VALUES ('Gaurav', 'gaurav@gmail.com', '987654321')
    `);
    
    // SQL query to update the password of a user based on the given email condition.
    await pgClient.query(`
        UPDATE users SET password = '123456789'
        WHERE id = '2'; 
    `);

    // SQL query to delete a user record based on the provided ID condition.
    await pgClient.query(`
        DELETE FROM users
        WHERE id = 1;
    `);

    // SQL query to retrieve all records from the 'users' table.
    const response = await pgClient.query(`
        SELECT * FROM users;
    `);
    
    // Logging the response, which contains all rows from the 'users' table.
    console.log(response.rows); // Logs the rows returned by the SELECT query

}

// Calling the main function to execute the database operations.
main();