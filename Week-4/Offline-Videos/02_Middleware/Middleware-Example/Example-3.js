/*
You have to create a middleware for rate limiting a users request based on their username passed in the header

You have been given an express server which has a few endpoints.

    Your task is to create a global middleware (app.use) which will rate limit the requests from a user to only 5 request per second
    - If a user sends more than 5 requests in a single second, the server should block them with a 404.
    - User will be sending in their user id in the header as 'user-id'
    - You have been given a numberOfRequestsForUser object to start off with which clears every one second
*/

const express = require("express")

const app = express()

numberOfRequestsForUser = {}

setInterval(() => {
    numberOfRequestsForUser = {};            // isse for every second yeh object clear hota rhega 
}, 1000);


app.use(function(req, res,next){
    const userId = req.headers["user-id"]
    if(numberOfRequestsForUser[userId]>5){
        numberOfRequestsForUser[userId]++
        if(numberOfRequestsForUser[userId]>5){
            res.status(404).send("No Entry")
        }else{
            next();
        }
    }else{
        numberOfRequestsForUser = 1
    }
    next();
})

// create a route for GET request on /user path
app.get("/user", function (req, res) {
    // return a json response with name as Rohan
    res.status(200).json({ name: "Rohan" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    // return a json response with message "created dummy user
    res.status(200).json({ msg: "created dummy user" });
});

// Start the server on port 3000
app.listen(3000);