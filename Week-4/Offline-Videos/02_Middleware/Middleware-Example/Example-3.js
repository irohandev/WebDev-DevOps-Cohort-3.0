/*
You have been given an express server which has a few endpoints.

Your task is to create a global middleware (app.use) which will maintain a count of the number of 
requests made to the server in the global requestCount variable
*/


const express = require("express");

const app = express();

let requestCount = 0;

// create a middleware function that increments the requestCount by 1 for every request made to the server
app.use(function (req, res, next) {
    // increment the requestCount by 1
    requestCount = requestCount + 1;

    // call the next middleware function in the stack
    next();
});

// create a route for GET request on /user path
app.get("/user", function (req, res) {
    //return a json response and contains Rohan name in it
    res.status(200).json({ name: "Rohan" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    // return a json response with message "created dummy user"
    res.status(200).json({ msg: "created dummy user" });
});

// create a route for GET request on /requestCount path
app.get("/requestCount", function (req, res) {
    // return a json response with requestCount
    res.status(200).json({ requestCount });
});

// Start the server on port 3000
app.listen(3000);

/*
Notes:
- reqcounter ko initialize kiye globally 0 se 
- app.use se ek middleware function bnaye hai ..hm app.use ke andar bhi bana skte ya upar function name k sath define kr sakte aur app.use ke andar uska name add kr skte.
- ab us middleware function ke andar reqcounter ko increase kiya...aur next ko cll kr diya jisse middleware ke below are excute ko jab jiske port mein open krenge toh
- app.get se ek get req kiye hai 
- app.post se post bhi kiye hai 
- phr uske badd app.get se reqcount kiye hai jo ki last mein hmlog ko final kitna req count hua hai btyega 
*/
