// Define an interface named User1 with properties for user details
interface User1 {
    id: number;
    name: string;
    age: number;
    email: string;
    password: string;
}

// First, pick three properties (id, name, and age) from the User1 interface
type UpdateUser1 = Pick<User1, 'id' | 'name' | 'age'>;

// Next, make all the properties of the picked type (id, name, age) optional
// This allows us to pass any combination of these properties as input
type UpdatePropsOptional = Partial<UpdateUser1>;

// This line would make all properties in the User1 interface optional
// type UpdateAllOptional = Partial<User1>

// Example usage of the UpdatePropsOptional type
// Only 'name' and 'age' are provided here, but it's valid because all properties are optional
const User1: UpdatePropsOptional = {
    name: "Rohan",
    age: 23
};

// Corrected the variable name in the console log (from 'user' to 'User1')
console.log(User1);
