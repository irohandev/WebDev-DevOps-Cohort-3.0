
// Async - await -The syntax in JavaScript provides a way to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain. 

// Q: Write code using async-await 
// 1.logs hi after 1 second
// 2.logs hello 3 seconds after step 1
// 3.logs heyy there 5 seconds after step 2

function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration)
    })
}

async function solve(){
    
    await setTimeoutPromisified(1000)       
    console.log("Hi");

    await setTimeoutPromisified(3000)
    console.log("Hello");
        
    await setTimeoutPromisified(5000)
    console.log("Heyy");
        
}
solve();            //Here we need to call solve() function..Otherwise the function will not execute

console.log("Outside the Solve block");


// Note:
// If we now execute the file then "Outside the Solve block" will get print fisrt becuase it appears ki like woh synchronous code but actually async-await promise ko cleaner way me likhney ka trika hai which is way of handling asynchronous code

