// Create an abstract class User with a name property, abstract greet function, and a hello function
abstract class User {
    // Define a name property of type string
    name: string;

    // Define a constructor that takes in a name parameter and assigns it to the name property
    constructor(name: string) {
        this.name = name;
    }

    // Define an abstract greet function that returns a string value
    abstract greet(): string;

    // Define a hello function that prints "Hello Everyone" to the console
    hello(): void {
        console.log("Hello Everyone");        
    }
}

// Create a class Employee that extends the User class
class Employee1 extends User {
    // Define a name property of type string
    name: string;

    // Define an age property of type number
    age: number;

    // Define a constructor that takes in a name and age parameter 
    constructor(name: string, age: number) {
        // Call the super method and pass in the name parameter
        super(name);

        // Assign the name parameter to the name property
        this.name = name;

        // Assign the age parameter to the age property
        this.age = age;
    }

    greet(): string {
        return "Heyyyy " + this.name;
    }
}

// Create an instance of the Employee class
let tempEmployee = new Employee1("Rohan Dev Singh", 23);

// Call the greet method on the tempEmployee instance
console.log(tempEmployee.greet()); // Output: Hi Rohan Dev Singh

// Call the hello method on the tempEmployee instance
tempEmployee.hello(); // Output: Hello Everyone

/*
 * Notes:
 * The basic difference between an abstract class and an interface is that an abstract class can have default implementations, 
 * whereas an interface does not have this property. 
 * An abstract class can contain both abstract methods (which must be implemented by derived classes) 
 * and concrete methods (with default behavior). On the other hand, an interface only defines method signatures 
 * without providing any implementation.
 */
