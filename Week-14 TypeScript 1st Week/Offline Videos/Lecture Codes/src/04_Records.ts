// Define a union type named 'UserRoles' that can have one of three string values: 'admin', 'user', or 'guest'.
// This helps enforce strict typing for roles throughout the code.
type UserRoles = 'admin' | 'user' | 'guest';

// Create a Record type where the keys are of type 'UserRoles' and the values are strings.
// The Record utility type ensures that the object will only have keys that match the 'UserRoles' and values of type string.
const userPermissions: Record<UserRoles, string> = {
    admin: 'Full Access', 
    user: 'Limited Access',
    guest: 'Read-Only Access', 
};

// Output the userPermissions object to the console.
// This will display the permissions associated with each role.
console.log(userPermissions);
