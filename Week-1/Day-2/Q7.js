// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)
function greet(username){
    console.log("Hi Mr. " + username.name + " your age is " + username.age);    
}
let username = {
    name: "XYZ",
    age: 99,
    gender: "Male",
};
greet(username);