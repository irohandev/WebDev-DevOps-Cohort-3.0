// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS.
function getEvenNumbers(arrayOfNumbers){
    return arrayOfNumbers.filter(num => num % 2 === 0);
}
const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const evenNumbers = getEvenNumbers(arrayOfNumbers);
console.log(evenNumbers);
