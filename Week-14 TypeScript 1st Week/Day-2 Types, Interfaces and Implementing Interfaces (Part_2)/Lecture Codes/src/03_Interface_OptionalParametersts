//Optional Parameters

// Define an interface for the User object with specific fields and data types.
interface Users {
    name: string; 
    age: number; 
    address?: { // Optional property for the user's address
        city: string; 
        country: string; 
        pincode: number; 
    };
}

// Creating a user object that matches the defined interface structure.
let user1: Users = {
    name: "Rohan Dev", 
    age: 23, 
    address: { 
        city: "Panagarh",
        country: "India",
        pincode: 713148
    }
};

// Creating another user object without the optional address field.
let user2: Users = {
    name: "Abc", 
    age: 23,


    // Since 'address' is optional, it is not included here.
    // However, if 'address' is included, all fields (city, country, pincode) must be specified.
    
    // Example of an invalid structure:
    // address: {
    //     pincode: 123456 // Missing 'city' and 'country' fields, so this would throw an error.
    // }
};

// To make individual fields of 'address' optional, you need to mark each field with '?'.
// For example: address?: { city?: string; country?: string; pincode?: number; }

// Checking if the user's age is greater than 18 to determine adulthood.
if (user1.age > 18) { // Using 'user1' object since 'user' is not defined in the current context
    console.log("User is an adult!"); // Logs if the user is an adult
}


//Repeating Parameters

// Define an interface for subjects, containing three subject properties.
interface Subject {
    subject1: string;
    subject2: string;
    subject3: string;
}

// Define an interface for a student, which includes a name, roll number, 
// and an optional subjects property of type Subject.
interface Student {
    name: string;
    rollNo: number;
    subjects?: Subject; // Optional property
}

// Define an interface for a teacher, which includes a name and 
// an optional subjects property of type Subject.
interface Teacher {
    name: string;
    subjects?: Subject; // Optional property
}

// Create a student object with subjects.
const student1: Student = {
    name: "Rohan Dev Singh",
    rollNo: 1,
    subjects: {
        subject1: "Physics",
        subject2: "Chemistry",
        subject3: "Mathematics",
    },
};

// Create a teacher object without subjects.
const teacher1: Teacher = {
    name: "Mr. X",
};

// Output examples
console.log("Student Information:");
console.log(`Name: ${student1.name}`);
console.log(`Roll Number: ${student1.rollNo}`);
if (student1.subjects) {
    console.log("Subjects:");
    console.log(`  Subject 1: ${student1.subjects.subject1}`);
    console.log(`  Subject 2: ${student1.subjects.subject2}`);
    console.log(`  Subject 3: ${student1.subjects.subject3}`);
}

console.log("\nTeacher Information:");
console.log(`Name: ${teacher1.name}`);
if (teacher1.subjects) {
    console.log("Subjects assigned.");
} else {
    console.log("No subjects assigned.");
}