// Function to greet a user by printing a message with their name and age
function wish(user: {
    name: string; 
    age: number 
    }) {
    // Log a greeting message with the user's name and age
    console.log(`Hello ${user.name}, you are ${user.age} years old.`);
}

// Calling the greet function with an object that has the name "Bharat" and age 22
wish({
    name: "Gaurav",  // User's name
    age: 22,         // User's age
});

// Declaring a user object with the name "Deepak" and age 19
let user = {
    name: "Rohan Dev",  // User's name
    age: 23,            // User's age
};

// Calling the greet function with the user object
wish(user);
