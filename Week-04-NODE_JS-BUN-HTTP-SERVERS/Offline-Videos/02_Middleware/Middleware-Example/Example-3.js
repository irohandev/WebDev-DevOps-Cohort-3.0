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
    const userId = req.headers["user-id"]           //isse userid le lega server
    if(numberOfRequestsForUser[userId]>5){          //This will check ki rate of request 5 se jyada hai ki nahi
        numberOfRequestsForUser[userId]++           //if 5 se jyada hai toh usko aur increase kr do
        if(numberOfRequestsForUser[userId]>5){      //nested if se pta chlega agr woh 5 se jyda tha toh ab 6 se ho gya.. aur 6 toh 5 se jyada ek error status show kro
            res.status(404).send("No Entry")
        }else{
            next();                                 // call the next middleware function in the stack
        }
    }else{                                          //aur if 5 se kam rha toh object waise hi empty tha kyuki globally empty initize krwaye the toh ab usko 1 se initialize kro aur next ko call kr do iske baad
        numberOfRequestsForUser = 1
        next();
    }
    
})

// create a route for GET request on /user path
app.get("/user", function (req, res) {
    res.status(200).json({ name: "Rohan" });
});

// create a route for POST request on /user path
app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000);