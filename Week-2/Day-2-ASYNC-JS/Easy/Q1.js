// Create a counter in JavaScript
// We have already covered this in the second lesson, but as an easy recap try to code a counter in Javascript It should go up as time goes by in intervals of 1 second

let ctr = 0
function Stopwatch() {
    console.log(ctr); 

    ctr = ctr + 1;
}

setInterval(Stopwatch, 1000);
