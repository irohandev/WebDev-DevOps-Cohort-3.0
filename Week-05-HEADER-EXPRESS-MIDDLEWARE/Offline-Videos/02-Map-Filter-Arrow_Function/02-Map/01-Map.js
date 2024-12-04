/*
Question :
Given an array, give me back a new array in which the value is multiplied by 2:
Input - [1,2,3,4,5]
Ouput - [2,4,6,8,10]
*/

const input = [1,2,3,4,5]

/*
 Solution - Method 1

const NewArray=[];
for (let i = 0; i < input.length; i++) {
    NewArray.push(input[i]*3);    
}
console.log(NewArray);
*/

// Solution - Method 2 {Using Map}

function transform(i){
    return i*2;
} 

const ans = input.map(transform);
console.log(ans);

/*
Aise bhi likh sakte map k andar function ya upar jaise hai woh bhi likh skte function define krke map ke andar function name add kr dena hai jisse woh call ho jyega 
const ans = input.map(function(i){
    return i*2;    
    });
*/


// Notes:
// map transforms each element in an array based on a provided function, returning a new modified array.
// Map hmlog ko ek feature deta like jaise hm loop k andar jo array ko transform karne ke liye logic likh rhe the usko ek separate ek fucntion bana ke likh diye hai.
// aur fucntion ko input array se sath map ke connect kr diye dono ko 






