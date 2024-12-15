// Define an interface for the User object with specific fields and data types.
interface Users {
    name: string; 
    age: number; 
    address: { // Nested object for the user's address.
        city: string; 
        country: string; 
        pincode: number; 
    };
}

// Note:
// All the properties defined in the interface are mandatory. 
// You cannot skip any property when creating a user object unless marked as optional. 
// For making properties optional, refer to the third code example in the repository.

// Creating a user object that matches the defined interface structure.
let user: Users = {
    name: "Rohan Dev", 
    age: 23, 
    address: { 
        city: "Panagarh", 
        country: "India", 
        pincode: 713148 
    }
};

// Checking if the user's age is greater than 18 to determine adulthood.
if (user.age > 18) {
    console.log("User is an adult!");
}