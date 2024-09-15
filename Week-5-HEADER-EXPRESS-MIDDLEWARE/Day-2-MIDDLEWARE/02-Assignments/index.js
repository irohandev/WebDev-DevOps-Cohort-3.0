/*
Assignments on middleware:
Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it
*/

const express = require("express");

const app = express();

//globally reqCount ko declare kiye 
let reqCount = 0;

function totalReq(req, res,next){
    reqCount = reqCount + 1;        //here we increment its value
    next();
}

app.use(totalReq)

app.get("/requestCount", function(req, res){
    res.send({
        totalRequests: reqCount     //idhar reqCount ke value ko return bhej diye 
    });
});

app.get("/asd", function(req,res){
    res.send("Hello");
});

app.listen(3000);