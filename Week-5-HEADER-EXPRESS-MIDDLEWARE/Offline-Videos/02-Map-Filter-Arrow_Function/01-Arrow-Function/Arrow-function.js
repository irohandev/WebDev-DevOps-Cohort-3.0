function sum(a,b) {         //Normal Function
    return a+b
}

const sum =(a,b) => {       //Arrow Function
    return a+b
}

app.get("/", function(req , res ){      //Normal function in get route

})

app.get("/", (req, res) => {            //Arrow function in the get route

})

/*
Notes:
An arrow function is essentially an anonymous function with a shorter syntax. They are often assigned to variables, making them reusable. Arrow functions are also known as lambda functions in some other programming languages.
*/