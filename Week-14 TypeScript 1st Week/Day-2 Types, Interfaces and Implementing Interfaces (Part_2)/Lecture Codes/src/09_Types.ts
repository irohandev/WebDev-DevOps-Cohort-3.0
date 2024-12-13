// NOTES:
// The 'type' keyword in TypeScript is used to define type aliases, making it easier to describe the structure of variables, objects, or functions. 
// You can use basic types like string, number, and boolean, or combine them to create custom types. 
// This helps ensure your code is more readable, maintainable, and less error-prone.

// Define a custom type 'ProductType' to represent an object with 'name', 'price', and 'category'
type ProductType = {
    name: string;       // 'name' is a string property for the product name
    price: number;      // 'price' is a number property for the product price
    category: string;   // 'category' is a string property for the product category
}

// Function to filter products by a minimum price
function filterProductsByPrice(products: ProductType[], minPrice: number): ProductType[] {
    // Return products that have a price greater than or equal to 'minPrice'
    return products.filter(product => product.price >= minPrice);
}

// Example usage: Call filterProductsByPrice with a list of products
const filteredProducts = filterProductsByPrice([
    { name: "Laptop", price: 1500, category: "Electronics" },  // Product 1
    { name: "Book", price: 20, category: "Education" },        // Product 2
    { name: "Headphones", price: 100, category: "Electronics" }// Product 3
], 50);

console.log(filteredProducts); 
// Outputs: 
// [
//   { name: 'Laptop', price: 1500, category: 'Electronics' },
//   { name: 'Headphones', price: 100, category: 'Electronics' }
// ]

// Union Types: Create a type for different payment statuses
type PaymentStatus = "paid" | "unpaid" | "pending";

let currentPaymentStatus: PaymentStatus; 
currentPaymentStatus = "paid";    // Valid
currentPaymentStatus = "unpaid";  // Valid
currentPaymentStatus = "pending"; // Valid
// currentPaymentStatus = "failed"; // Error: "failed" is not assignable to type 'PaymentStatus'

// Intersection Types: Combine multiple types into one
type Dimensions = {
    width: number;     // 'width' is a numeric property
    height: number;    // 'height' is a numeric property
};

type Box = {
    material: string;  // 'material' is a string property
    weight: number;    // 'weight' is a numeric property
};

// The 'ShippingBox' type combines 'Dimensions' and 'Box' using an intersection type (&)
type ShippingBox = Dimensions & Box;

let shipment: ShippingBox = {
    width: 20,        // Width of the box
    height: 15,       // Height of the box
    material: "Cardboard", // Material of the box
    weight: 5         // Weight of the box
};

console.log(shipment);
// Outputs: { width: 20, height: 15, material: 'Cardboard', weight: 5 }
