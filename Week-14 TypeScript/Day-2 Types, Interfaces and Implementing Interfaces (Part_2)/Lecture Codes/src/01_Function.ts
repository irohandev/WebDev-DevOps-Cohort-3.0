// Function to generate a greeting message with the provided name
function greet(name: string): string {
    // Return a greeting message concatenated with the name
    return "Hello " + name;
}

// Call the greet function with "Rohan" as an argument and store the result in the 'greeting' variable
let greeting = greet("Rohan");

// Print the greeting message to the console
console.log(greeting);

// Function to calculate the sum of two numbers
function sum(a: number, b: number): number {
    // Return the sum of the two numbers
    return a + b;
}

// Call the sum function with 10 and 20 as arguments and store the result in the 'result' variable
let result = sum(10, 20);

// Print the sum to the console
console.log(result);

// Function to check if a number is even
function isEven(num: number): boolean {
    // Return true if the number is even, otherwise return false
    return num % 2 === 0;
}

// Call the isEven function with 10 as an argument and store the result in the 'even' variable
let even = isEven(10);

// Print "Even" if the number is even, otherwise print "Odd"
if (even) {
    console.log("Even");
} else {
    console.log("Odd");
}
