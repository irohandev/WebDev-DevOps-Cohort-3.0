// Defining an interface 'Human' with properties and methods that any implementing class must follow
interface Human {
    name: string;  // Property to store the name of the human
    age: number;   // Property to store the age of the human
    greet: () => string;  // Method to return a greeting message
    isLegal: () => boolean;  // Method to check if the person is of legal age (18+)
}

// Creating a 'Manager' class that implements the 'Human' interface
class Manager implements Human {
    
    // If 'Human' interface is implemented, we must define the properties 'name' and 'age'
    // 'phone' is an additional property, specific to the Manager class
    // name : string;
    // age:number;
    phone: number;  // Additional property for storing phone number

    // Method-1: Defining the constructor to initialize 'name', 'age', and 'phone'
    // In this method, the 'name' and 'age' are passed through constructor parameters and 
    // 'phone' is assigned a default value
    // constructor(name: string, age: number) {
    //     this.name = name;
    //     this.age = age;
    //     this.phone = 1234567890; // Assigning a default value to phone
    // }

    // Method-2: A shorthand method of writing the constructor using public modifiers
    // Here, 'name' and 'age' are directly defined as public properties in the constructor
    // Hence, 'this' keyword is not needed to access them
    constructor(public name: string, public age: number) {
        this.phone = 123456789;  // Assigning a default value to 'phone' property
    }

    // Method to return a greeting message using the 'name' property - no need to write use function infront of any method present inside class 
    greet = () => {
        return "Hello " + this.name;  // Concatenating "Hello" with the name
    }

    // Method to check if the 'age' is greater than or equal to 18 to determine legal age
    isLegal() {
        return this.age >= 18;  // Returns true if age is 18 or more, false otherwise
    }
}

// Creating an instance of the Manager class
let manager = new Manager("Rohan Dev Singh", 23);  // Passing values for 'name' and 'age'

console.log(manager);  // Displaying the entire manager object

console.log(manager.age);  // Displaying the 'age' property of the manager object

// Calling the greet method and storing its return value in 'managerGreet'
let managerGreet = manager.greet(); 
console.log(managerGreet);  // Displaying the greeting message

console.log(manager.isLegal);  // Displaying the 'isLegal' method reference without calling it

