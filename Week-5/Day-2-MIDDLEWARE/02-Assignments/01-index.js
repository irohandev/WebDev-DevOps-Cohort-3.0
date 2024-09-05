/*
Assignments on middleware:
Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console
*/

const express = require("express");

const app = express();


function loggerMiddleware(req, res, next) {
    console.log("Method is " + req.method);             //Prints Method 
    console.log("Host is " + req.hostname);             //Print host
    console.log("Url is " + req.url);                   //Prints url
    console.log(new Date());                            //Prints current timestamp
    next();
}

app.use(loggerMiddleware)

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);

    res.json({
        ans: a + b
    })
});

app.get("/multiply", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a * b
    })
});

app.get("/divide", function(req, res) {
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        ans: a / b
    })

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans: a - b
    })
});

app.listen(3000);