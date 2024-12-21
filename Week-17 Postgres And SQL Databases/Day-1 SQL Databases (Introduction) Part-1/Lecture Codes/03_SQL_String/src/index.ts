import { Client } from 'pg'; // Importing the 'pg' library to interact with PostgreSQL database

// Creating a PostgreSQL client with connection string
const client = new Client("postgresql://database%201_owner:aBE0Nlv3WnYC@ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech/database%201?sslmode=require");

// Function to initialize the database and create the table if it doesn't exist
async function initializeDatabase() {
  try {
    await client.connect(); // Establish connection to the database
    // Creating a table only if it doesn't already exist
    await client.query(`
      CREATE TABLE IF NOT EXISTS SQL_String (
        id SERIAL PRIMARY KEY,              
        username VARCHAR(50) UNIQUE NOT NULL, 
        email VARCHAR(255) UNIQUE NOT NULL,   
        password VARCHAR(255) NOT NULL,       
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP 
      );
    `);
    console.log('Table initialized successfully.'); // Confirmation of table creation
  } catch (err) {
    console.error('Error during table initialization:', err); // Log error if table creation fails
  }
}

// Async function to insert data into the table
async function insertData(username: string, email: string, password: string) {
  try {
    // Parameterized query to prevent SQL injection attacks
    const insertQuery = "INSERT INTO SQL_String (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password]; // Replacing $1, $2, $3 with user inputs securely
    const res = await client.query(insertQuery, values); // Executing the query with the provided values
    console.log('Insertion success:', res); // Logging the successful insertion result
  } catch (err) {
    console.error('Error during the insertion:', err); // Log any error that occurs during insertion
  }
}

// Example usage of the functions
initializeDatabase() // First, ensure the table is created
  .then(() => insertData('John', 'john@example.com', 'Mainahibtaunga')) // Insert user data
  .catch(console.error) // Log any error during execution
  .finally(() => client.end()); // Ensure the database connection is closed

/* 

Explanation of Code:

1. Database Connection:
   - The Client object connects to the PostgreSQL database using the provided connection string.
   - The client.connect() establishes the connection, and client.end() closes it.

2. Table Initialization:
   - The initializeDatabase function ensures that the table SQL_String exists.
   - The CREATE TABLE IF NOT EXISTS query creates the table only if it is not already present in the database.

3. Inserting Data:
   - The insertData function uses a parameterized query to insert user data into the table, preventing SQL injection.
   - The $1, $2, $3 placeholders are replaced securely with the provided user inputs.

4. Error Handling:
   - Both functions have try-catch blocks to handle and log any errors that occur during execution.

Advantages:

1. Prevention of SQL Injection:
   - Parameterized queries protect against SQL injection attacks by treating user inputs as data rather than executable SQL code.

2. Table Initialization Safety:
   - The CREATE TABLE IF NOT EXISTS query ensures the table is only created when needed, avoiding runtime errors.

3. Secure and Readable Code:
   - Separating data ($1, $2, $3) from logic improves readability and prevents syntax errors.

4. Timestamp Automation:
   - The created_at column automatically captures the record's creation time, useful for auditing and tracking.

5. Efficient Connection Management:
   - Properly opening and closing the database connection ensures resources are managed efficiently.

6. Error Logging:
   - Detailed logging of errors helps in debugging and maintaining the application.

*/
