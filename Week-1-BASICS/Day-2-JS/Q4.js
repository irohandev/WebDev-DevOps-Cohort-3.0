// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." Otherwise, print "The number is odd."

function isEven(number){
    if (number % 2 == 0){
        console.log("The number is even");
    }
    else{
        console.log("The number is odd");
    }
}
isEven(2);