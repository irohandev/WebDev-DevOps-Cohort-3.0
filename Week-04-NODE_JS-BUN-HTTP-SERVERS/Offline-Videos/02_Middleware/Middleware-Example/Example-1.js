const express = require("express")          //yeh toh hamre ke jaise express ko require keywords se import krwa liye
const app = express()               //express se ke app bana liye jisko sabpe use krne chahiye hoga

// This function is a middleware function that jo check krega 
function isOldEnoughMiddleware(req,res,next){
    const age = req.query.age;          //age input le rha 
    if (age>=15){
        next();     //jis port pe route pe server start hua yeh if condition next se us get pe indicate kr rha like localhost:3000/ride1?age=20 - yeh ride1 wle ko signal de rha hai 
    }else{
        res.json({
            msg:"Sorry you are underage !"
        })
    }
}

app.use(isOldEnoughMiddleware);

app.get("/ride2"), function(req, res){
    res.json({
        msg:"You have succesfully riden ride 2",
    });
}


// app.use(isOldEnoughMiddleware);              agar if isko yaha like toh iske udhr wle routes jo get req kr rhe unpe kam nahi krega woh


app.get("/ride1"), function(req, res){          //// http://localhost:3000/ride2?age=10 aise input krna hai browser pe to get iska output
    res.json({
        msg:"You have succesfully riden ride 1",
    });
}


app.listen(3000);       //And this will start the server at port 3000


/*
Notes:
- Suppose tum ek mele mein gaye udhr tumko kisi jhule mein ride krna toh phle tum ticket loge phr tumhra checking hoga phir phr line mein jaoge phr tumhra bari ayega ride pe jane ka 
- So middleware is same like that only...jo basically kind of checking jaisa kam karta hai.
- app.use(isOldEnoughMiddleware) - yeh line ka order bhot jruri middleware function ke niche add krnge tabhi baki sabhi get ke under kam krega ...warna yeh kisi get ke niche hoga toh is code ke upar wle get pe ye kam nahi karega.
- hmlog is function ke bich bhi middleware function ko call kr skte...bass us middleware function ke name ko get ke andar add krna hoga. Example - app.get("/ride2"), isOldEnoughMiddleware, function(req, res){}
*/