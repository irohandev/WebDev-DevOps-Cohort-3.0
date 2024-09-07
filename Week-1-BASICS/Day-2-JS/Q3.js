// Write a function called canVote that returns true or false if the age of a user is > 18.
function canVote(age){
    if (age > 18){
        return true
    }
    else{
        return false
    }
}
let P1 = canVote(98);
let P2 = canVote(12)
console.log(P1);
console.log(P2);
