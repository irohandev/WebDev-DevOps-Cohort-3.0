// Define a type alias `UserMap` to represent the structure of user data.
// This defines an object type with properties: `name` (string), `age` (number), and `email` (string).
type UserMap = {
    name: string;  // Name of the user.
    age: number;   // Age of the user.
    email: string; // Email address of the user.
}

// Create a new Map object to store user data.
// The map will use strings as keys (e.g., "A", "B", "C") and `UserMap` objects as values.
const users = new Map<string, UserMap>();

// Add user data to the Map using the `set` method.
// The first argument is the key (e.g., "A"), and the second argument is the user data object.
users.set("A", { name: "Rohan", age: 25, email: "rohan@example.com" });
users.set("B", { name: "Gaurav", age: 23, email: "gaurav@example.com" });

// Retrieve the data associated with key "A" using the `get` method.
// The `get` method returns the value associated with the key, or `undefined` if the key does not exist.
const selectedUser = users.get("A");

// Log the retrieved user data to the console.
// This will print the data of the user with key "A" (Rohan's details) to the console.
console.log(selectedUser);
