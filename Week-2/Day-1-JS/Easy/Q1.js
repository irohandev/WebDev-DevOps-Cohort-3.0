/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sortedstr1 = str1.toLowerCase().split('').sort().join('');
  const sortedstr2 = str2.toLowerCase().split('').sort().join('');

  if (sortedstr1==sortedstr2){
    return true;
    
  }
  else{
    return false;
    
  }
}
const a = isAnagram("rohan","ohran")
console.log(a);


// Note:
// String ko direct sort krne k liye koi function nahi.
// Str ko lowercase kiye after that we use split function to split it which converts the string to array.
// After that array ke pass sorting method hota we will sort with that. 
// After that hm usko join krwa diye.
// Then woh string mein convert ho jta phr usko sortedstr1 se sortedstr2 ko compare krwa diye. 