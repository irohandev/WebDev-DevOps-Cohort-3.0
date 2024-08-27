
// Callback Hell - Callback hell is something jaha Callback is called inside another Callback. It is the nesting of multiple Callbacks inside a function.


// Q: Write code that
// 1.logs hi after 1 second
// 2.logs hello 3 seconds after step 1
// 3.logs heyy there 5 seconds after step 2
 

//Sol 1 - yeh hua anonymous function ke help se kiye ..anonymous function are those jinke name nhi hote 
setTimeout(function(){
    console.log("Hi");
    setTimeout(function(){
        console.log("Hello");
        setTimeout(function() {
            console.log("Heyy");            
        },5000)
    },3000)
},1000)

// Sol 2 - Yeh previous method jo hm use krte settimeout likhtey wakt :
function callback3(){
    console.log("Heyy");    
}
function callback2(){
    console.log("Hello");
    setTimeout(callback3,5000)    
}

function callback(){
    console.log("Hi");
    setTimeout(callback2, 3000)    
}

setTimeout(callback,1000)