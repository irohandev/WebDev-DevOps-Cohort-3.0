// Define an interface representing a User with various properties
interface User {
    id: number; // Unique identifier for the user
    name: string; // Name of the user
    age: number; // Age of the user
    email: string; // Email address of the user
    password: string; // Password for user authentication
}

// Create a new type that only picks specific properties (id, name, age) from the User interface
type UpdateUser = Pick<User, 'id' | 'name' | 'age'>;

// Initialize a user object of type UpdateUser with required properties
const user: UpdateUser = {
    id: 9876, // User ID
    name: "Rohan", // User's name
    age: 23 // User's age
};

// Log the user object to the console
console.log(user);
