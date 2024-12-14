// Define an interface named 'User3' with two properties: 'id' and 'name'.
// Both properties are required and have specific types.
interface User3 {
    id: number;  // The 'id' property is of type 'number'.
    name: string;  // The 'name' property is of type 'string'.
}

// Create a constant object 'ReadOnlyUser' with the type 'Readonly<User3>'.
// The 'Readonly' utility type makes all properties of the 'User3' interface immutable.
const ReadOnlyUser: Readonly<User3> = { id: 1, name: 'Rohan' };

// Log the object 'ReadOnlyUser' to the console.
console.log(ReadOnlyUser);

// Attempting to modify the 'id' property will throw a TypeScript error.
// Uncommenting the line below will result in:
// Error: Cannot assign to 'id' because it is a read-only property.
// ReadOnlyUser.id = 2;

// Attempting to modify the 'name' property will also throw a TypeScript error.
// Uncommenting the line below will result in:
// Error: Cannot assign to 'name' because it is a read-only property.
// ReadOnlyUser.name = 'Gaurav';
