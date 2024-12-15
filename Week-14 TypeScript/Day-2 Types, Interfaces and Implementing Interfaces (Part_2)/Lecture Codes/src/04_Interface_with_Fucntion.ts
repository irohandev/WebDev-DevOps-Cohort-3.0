// Define an interface named People to enforce a specific structure for objects
interface People{
    name: string;
    age: number;
    // greet(): string, // greet is a normal function that returns a string value
    greet: () => string, // greet is a arrow function that returns a string value

}

// Create an object named 'person' that adheres to the People interface
let person: People = {
    name: "Rohan Dev",
    age: 23,
    // Define the greet function, which returns a greeting message
    greet: () => {
        return "Hi " + person.name; // Concatenate "Hi" with the person's name
    }
};


// Call the greet function on the 'person' object and log the output to the console
console.log(person.greet());



