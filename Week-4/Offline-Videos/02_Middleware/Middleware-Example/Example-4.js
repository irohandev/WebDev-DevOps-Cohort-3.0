/*
You have to create a middleware for logging the number of errors on a server

You have been given an express server which has a few endpoints.

Your task is to
1. Ensure that if there is ever an exception, the end user sees a status code of 404
2. Maintain the errorCount variable whose value should go up every time there is an exception in any endpoint
*/

const express = require("express");

const app = express();

let errorCount = 0;

app.get("/user", function (req, res) {
    // throw an error with message "Some Error"
    throw new Error("Some Error");

    res.status(200).json({ name: "john" });
});

app.post("/user", function (req, res) {
    res.status(200).json({ msg: "created dummy user" });
});

app.get("/errorCount", function (req, res) {
    // return a json response with errorCount variable value
    res.status(200).json({ errorCount });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    // send a 404 status code as response to the user if there is an exception in any endpoint 
    res.status(404).send({});

    // increment the errorCount variable by 1
    errorCount++;
});

app.listen(3000);

/*
Note:
- If kabhi server pe kuch uncertainity ke wjh se like wrong code ya anything ke wjh se error aa jta toh express 500 throw krta hai isliye isko sudhrne k liye express mein error handling middleware hota jisse hmlg uske status ko change kr skte hai
- Error handling middleware is used here in this jisse hmlg status code ko sahi kr skte hai 
- Error handling middlewares ko hmase sare get post routes ke baad ending mein likhtey hai..yeh jruri hai order
- Ispe 4 arguments hota jaise normal wle pe 3 hota ispe 4 hota hai.
- ispe app.use(function(err, req, res, next)) yeh 4 hote hai 
*/