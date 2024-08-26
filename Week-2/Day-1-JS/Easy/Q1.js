/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const sortedstr1 = str1.sort()
  const sortedstr2 = str2.sort()
  if (sortedstr1==sortedstr2){
    console.log("True");
    
  }
  else{
    console.log("False");
    
  }
}

module.exports = isAnagram;