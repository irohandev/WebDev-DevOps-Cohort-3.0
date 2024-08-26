// Also tell the user if they are legal to vote or not.
const user = [{
    name: "ABC",
    age: 10
},{
    name: "XYZ",
    age: 20
}];

function isVote(user){
    for(let i=0; i<user.length; i++){
        if(user[i].age>=18){
            console.log("You are eligible for voting");
        }else{
            console.log("You are not eligible for voting");
        }
    }
}
isVote(user);