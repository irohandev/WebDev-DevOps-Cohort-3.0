// Counter without setInterval
// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let ctr = 0
function Stopwatch() {
    console.log(ctr); 
    ctr = ctr + 1;

    setTimeout(Stopwatch,1000);
}

setTimeout(Stopwatch, 1000);


//Note:
//Kind of recursion ke jaise we are implementing setTimeout as asetInterval function.