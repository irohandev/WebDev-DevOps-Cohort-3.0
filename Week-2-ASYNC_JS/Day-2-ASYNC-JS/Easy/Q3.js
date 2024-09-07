// Reading the contents of a file
// Write code to read contents of a file and print it to the console. You can use the fs library to as a black box, the goal is to understand async tasks. Try to do an expensive operation below the file read and see how it affects the output. Make the expensive operation more and more expensive and see how it affects the output.

const fs = require ('fs'); //fs module ko import kra 

const filepath = 'Week-2/Day-2-ASYNC-JS/Easy/a.txt';  // yeh hamare file ka name aur uske address mtlb us file k path jispe read krwana hai

fs.readFile(filepath, 'utf-8', (err, data) => {     //yeh syntax hai file read karne ka where filepath, aur ee aur data we are passing jispe if kuch error hua toh err return krega warna it will return the data 
    if(err){
        console.log('Error in file :', err);        
        return        
    }
    console.log('File content:', data);
});

function expensiveOperation(){      //this is the expensive operation jispe sum calculate krega 
    let sum = 0; 
    for (let index = 0; index < 1e8; index++) {        //1e8 is scientific notation for 100,000,000 jiske wajh se loop bhot long tym ke liye chale 
        sum = sum + index;
    }
    console.log("Expensive operation completed and its result : ", sum);   
}
expensiveOperation();

// Note :
// This question is for understanding the concept of Async js 
// where we are reading data from external file and we are performing expensive operation jisse ki like file read hote-hote bhi loop ka task hota rhega and after completing the fs reading task will be done  