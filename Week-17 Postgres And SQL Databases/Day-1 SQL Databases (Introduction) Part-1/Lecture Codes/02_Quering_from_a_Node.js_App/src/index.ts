import { Client } from 'pg';

// Create a single reusable pgClient instance
const pgClient = new Client("postgresql://database%201_owner:aBE0Nlv3WnYC@ep-round-sun-a5ojsiow.us-east-2.aws.neon.tech/database%201?sslmode=require");

// Async function to fetch user data from the database given an email
async function getUser(email: string) {
  try {
    await pgClient.connect(); // Ensure client connection is established
    const query = 'SELECT * FROM users WHERE email = $1';
    const values = [email];
    const result = await pgClient.query(query, values);

    if (result.rows.length > 0) {
      console.log('User found:', result.rows[0]); // Output user data
      return result.rows[0]; // Return the user data
    } else {
      console.log('No user found with the given email.');
      return null; // Return null if no user was found
    }
  } catch (err) {
    console.error('Error during fetching user:', err);
    throw err; // Rethrow or handle error appropriately
  } finally {
    await pgClient.end(); // Close the client connection
  }
}

// Example usage
getUser('rohan@gmail.com').catch(console.error);

/*
Explanation:
1. The `pg` library is used to interact with a PostgreSQL database.
2. A reusable `pgClient` instance is created using a connection string.
3. The `getUser` function takes an email, connects to the database, and queries for the user.
4. Parameterized queries are used for security against SQL injection.
5. If the user is found, their details are logged and returned; otherwise, `null` is returned.
6. Errors are logged and rethrown for further handling.
7. The client connection is always closed after the query execution, ensuring proper resource cleanup.
8. An example call demonstrates how to use the `getUser` function and handle its output or errors.
*/
