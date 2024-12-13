// Define a class named Shape
class Shape {
    // Method to calculate the area
    area(): void {
        console.log("Area Function called from Shape!");  // Logs when the area function is called from Shape
    }
}

// Define a class named Circle that extends Shape (inherits from Shape)
class Circle extends Shape {
    // Override the area method from the Shape class
    area(): void {
        console.log("Area function called from Circle!");  // Logs when the area function is called from Circle
    }

    // Method to calculate the perimeter of the circle
    perimeter(): void {
        console.log("Perimeter function called from Circle!");  // Logs when the perimeter function is called from Circle
    }
}

// Create an instance of Shape
let shape = new Shape();
shape.area();  // Calls the area method from the Shape class

// Create an instance of Circle
let circle = new Circle();
circle.area();       // Calls the overridden area method from the Circle class
circle.perimeter();  // Calls the perimeter method from the Circle class
