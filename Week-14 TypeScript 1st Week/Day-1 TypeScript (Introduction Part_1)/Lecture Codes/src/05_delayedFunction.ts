// This function accepts a callback function and calls it after a delay of 1000ms (1 second). 
// The function doesn't return anything, so the return type is 'void'. If it returned a number, 
// the return type should be 'number' instead of 'void'.
function delayedCall(fn: () => void) {
    setTimeout(fn, 1000);
}

// Calling delayedCall and passing a function that logs "hi there" after 1 second
delayedCall(function() {
    console.log("hi there");
})
