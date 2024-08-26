// Variables:- are used to store data. In Javascript, you declare variables using var, let, const.

// let firstName = "John";
// const age = 44;
// var isStudent = true;

// console.log(firstName);
// console.log(age);
// console.log(isStudent);

var isStudent = true;
// console.log(isStudent);

isStudent = 29
isStudent = "PQR";

// console.log(isStudent);

// -----------------------------------------------------

// Data types:- 

let number = 43; // Number
let string = "Hello"; // String
let isActive = false; // Boolean
let numbers = [1,2,3]; // Array

// ------------------------------------------------------

// Operators:- 

let sum = 10 + 5;
let isEqual = (10 === 10);
let isTrue = (true && false);

// ------------------------------------------------------

// Functions:-

function greet(name){
    return "Namaste" + name;
}

let message = greet("ABC");
console.log(message);


function addition(a, b){
    let totalSum = a + b;
    return totalSum;
}
let result = addition(22, 11);
console.log(result);

// ------------------------------------------------------

// If/Else:-

function isVote(age){
    if (age >= 18 ){
        console.log("You are an adult");
    }
    else{
        console.log("You are a minor");
    }
}
isVote(12);
isVote(45);

// ----------------------------------------------------

// Loops:- It keep running again and again

let WorldCupPlayers = ["Virat", "Rohit", "Dhoni", "Sachin", "Dhawan", "Jadeja"];
let totalPlayers = WorldCupPlayers.length;

for(let i=0; i<totalPlayers; i++){
    console.log(WorldCupPlayers[i]);    
}
// console.log(WorldCupPlayers[0]);
// console.log(WorldCupPlayers[1]);
// console.log(WorldCupPlayers[2]);
// console.log(WorldCupPlayers[3]);

// ------------------------------------------------------

// Objects:- An object in JavaScript is a collection of key-value pairs, where each key is a string and each value can be any valid JavaScript data type, including another object.

let user = {
    FullName: "ABC",
    age: 99
}
console.log("ABC age is " + user.age);
