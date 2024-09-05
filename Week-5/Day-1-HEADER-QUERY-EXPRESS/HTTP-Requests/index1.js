// Question : # Create an HTTP Server

// It should have 4 routes

// 1. http://localhost:3000/multiply?a=1&b=2
// 2. http://localhost:3000/sum?a=1&b=2
// 3. http://localhost:3000/divide?a=1&b=2
// 4. http://localhost:3000/subtract?a=1&b=2

// Inputs given at the end after `?` are known as query parameters (usually used in GET requests)
// The way to get them in an HTTP route is by extracting them from the `req` argument (req.query.a , req.query.b)

const express = require("express");

const app = express();

app.get("/sum", function(req, res) {
    const a = parseInt(req.query.a)     //pareInt is done because hm input string ke form mei le rhe hai toh data stype string hoga toh 1+2 = 12 honjyega isliye int ban jaye isliye parseInt use kr rhe jisse 1+2=3 hoga na ki 12
    const b = parseInt(req.query.b)
    res.json({
        ans: a+b
    })

});

app.get("/multiply", function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a*b
    })
    
});

app.get("/divide", function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a/b
    })    

});

app.get("/subtract", function(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a-b
    })

});


app.listen(3000);