// Q: Write code using promisified setTimeout 
// 1.logs hi after 1 second
// 2.logs hello 3 seconds after step 1
// 3.logs heyy there 5 seconds after step 2


function setTimeoutPromisified(duration){           //we made a promisified version of setTimeout 
	return new Promise(function (resolve) {
		setTimeout(resolve, duration);
	});
}

setTimeoutPromisified(1000).then(function(){
    console.log("Hi");
    setTimeoutPromisified(3000).then(function(){
        console.log("Hello");
        setTimeoutPromisified(5000).then(function(){
            console.log("Heyy");
        })        
    })
})


//Promise Chaning - Promise Chaining is a something by which we may initialize another promise inside our .then() method and accordingly we may execute our results. The function inside then captures the value returned by the previous promise.

//Now doing the same thing using Promise Chaning method of Promisified Callback Hell:

setTimeoutPromisified(1000).then(function(){
    console.log("Hi");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("Hello");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("Heyy");    
})