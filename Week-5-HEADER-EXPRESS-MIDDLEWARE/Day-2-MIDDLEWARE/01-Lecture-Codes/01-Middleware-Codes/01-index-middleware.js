
const express = require("express");

const app = express();

let reqCount = 0;

function reIncreaser(req, res,next){
    reqCount = reqCount + 1;
    console.log("Total no. of requests" +reqCount );
    next();             //ya jo ispe yeh next fucntion pass krenge jisse yeh middleware se baki routes pe jaye 
    /*
    res.json({
        msg:"Error"        //warna we have to add this jisse woh pass na ho 
     })
    */
}

function  sumHandler(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a+b
    })
}
function  multiplyHandler(req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a*b
    })
}

app.get("/sum",reIncreaser,sumHandler);             //bich mei we have writen middleware name beacuse I need it for this route 

app.get("/multiply",multiplyHandler);               //aur jab middleware is route ke liye nahi chahiye hga toh we will not specify that.


app.listen(3000);


/*
Notes:
-Sometimes yeh bar bar aise routes ke andar middleware k name na likhe toh woh call nhi hoga jisse if we need that middleware then it wont be available
-So we have a solution for that, We will use :
    - app.use(Middleware_function_name)     - The purpose of this ki yeh khudh un sabhi routes ke liye available hoga jo iske under ya after honge like jitne bhi get ya post routes honge sabpe yeh kam krega..us sbhi pe call hoga 
    - Example :
        app.use(reIncreaser)
        app.get("/sum", sumHandler);
        app.get("/multiply", multiplyHandler);

        -Yeh in dono ke liye kaamm krega 
        - Important Note: Jo bhi route is app.use ke upar hoga woh sb ke pass yeh middle ware ka access nhi hoga..so this order of writing app.use is very important & it should be kept in mind while writing this code.
*/

    



