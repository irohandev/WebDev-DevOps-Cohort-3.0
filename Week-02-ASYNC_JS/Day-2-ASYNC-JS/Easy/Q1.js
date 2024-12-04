// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let ctr = 0
function Stopwatch() {
    console.log(ctr); 

    ctr = ctr + 1;
}

setInterval(Stopwatch, 1000);

// setInterval - this will call the function after every 1 sec
// setTimeout - this will call the function only 1 time after a second
// Here ctr is initialized with 0 and we took it inside the function and incrementing its value and every 1 sec the setInterval function is calling it.
