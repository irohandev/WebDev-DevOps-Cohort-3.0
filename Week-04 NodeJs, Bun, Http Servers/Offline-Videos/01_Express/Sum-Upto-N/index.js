const express = require ("express")

const app = express()

function sum(n){
    let ans = 0;
    for (let i = 0; i <=n; i++) {
        ans = ans +i;
    }
    return ans;
}

app.get("/", function(req, res){            
    const n = req.query.n;
    const ans = sum(n);
    res.send("Hello your requested sum is " + ans );
})

app.listen(3000)

/*
Notes:
1. req means request and res means respond 
2. app.get mein jo "/" hai is hm / ke baad kuch add kre for ex- "/asd", then browser pe hame is port ko searcj krega for the output.. ex - localhost:3000/asd
3. Here we have to give input, So browser pe we will search 'localhost?n=jo bhi value dena hai meko woh' example - localhost:3000?n=10 or localhost:3000/asd?n=10
*/