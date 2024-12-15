// Function to log a greeting message to the console
function greet(firstName: string): void {
    // Print a personalized greeting message
    console.log(`Hello, ${firstName}!`);
}

// Invoke the greet function with a sample name
greet('Rohan');

// Arrow function to log a greeting message to the console
let greetUser = (firstName: string): void => {
    // Print a personalized greeting message
    console.log(`Hello, ${firstName}!`);
}

// Invoke the greetUser function with a sample name
greetUser('Gaurav');
