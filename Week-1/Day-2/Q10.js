// Create a function that takes an array of objects as input, and returns the users whose age > 18 and are male

const users=[{
    name:"ABC",
    age:22,
    gender:"male"
},{
    name:"XYZ",
    age:21,
    gender:"female"
},{
    name:"DEF",
    age:17,
    gender:"male"
},{
    name:"PQR",
    age:20,
    gender:"male"
}]

function maleAndAbove18(users){
    return users.age >= 18 && users.gender=="male"
}

function filterMaleAndAbove18(users){
    let arr = users.filter(maleAndAbove18);
    return arr;
}
console.log(filterMaleAndAbove18(users));