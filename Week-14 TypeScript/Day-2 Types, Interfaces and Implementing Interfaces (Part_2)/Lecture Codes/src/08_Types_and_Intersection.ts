// Defining an Employee type with 'name' and 'startDate' properties
type Employee = {
    name: string;      // The name of the employee (string type)
    startDate: string; // The start date of the employee (string type)
};

// Defining a Staff type with 'name' and 'department' properties
type Staff = {
    name: string;      // The name of the staff member (string type)
    department: string; // The department where the staff works (string type)
};

// Creating a TeamLead type which combines both Employee and Staff types
// Using Intersection to combine both types
type TeamLead = Employee & Staff; // TeamLead will have properties from both Employee and Staff

// Creating an Employee object with 'name' and 'startDate' properties
let employee1: Employee = {
    name: "ABC",          // Name of the employee
    startDate: "08-11-2024" // Start date of the employee
};

// Creating a Staff object with 'name' and 'department' properties
let staff1: Staff = {
    name: "XYZ",          // Name of the staff member
    department: "Electric" // Department of the staff member
};

// Creating a TeamLead object which must have properties of both Employee and Staff
const teamLead: TeamLead = {
    name: "John",           // Name of the team lead
    startDate: "14-12-2020", // Start date of the team lead
    department: "Software developer" // Department of the team lead
};

// Notes:
// Intersection means combining two types together.
// In TypeScript, the `&` operator is used to combine two types, creating an intersection. 
// This means the resulting type (in this case, `TeamLead`) must have all the properties 
// from both `Employee` and `Staff` types. 
// In this example, the `teamLead` object has properties from both the `Employee` (name, startDate) 
// and `Staff` (name, department) types. Therefore, a `TeamLead` must have all of these properties 
// to be valid, meaning it must have `name`, `startDate`, and `department`.
