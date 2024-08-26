// Write a function that takes a user as an input and greets them with their name and age
function greet(username){
    console.log("Hi " + username.name + " your age is " + username.age);    
}
let username ={
    name: "ABC",
    age: 99
}
greet(username);