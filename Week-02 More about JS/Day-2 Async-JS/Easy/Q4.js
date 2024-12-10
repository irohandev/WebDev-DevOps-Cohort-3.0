// Write to a file
// Using the fs library again, try to write to the contents of a file. You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require ('fs'); //fs module ko import kra 

const data = 'Input data from Q4 file.'

const filepath = 'Week-2/Day-2-ASYNC-JS/Easy/b.txt';  // yeh hamare file ka name aur uske address mtlb us file k path jispe read krwana hai

fs.writeFile(filepath, data , (err) => {     //yeh syntax hai file write karne ka where filepath, aur ee aur data we are passing jispe if kuch error hua toh err return krega warna it will return the data 
    if(err){
        console.log('Error in file :', err);        
        return        
    }
    console.log("Data written in b.txt, Now you can the file!");
});


function expensiveOperation(){      //this is the expensive operation jispe sum calculate krega 
    let sum = 0; 
    for (let index = 0; index < 1e8; index++) {        //1e8 is scientific notation for 100,000,000 jiske wajh se loop bhot long tym ke liye chale 
        sum = sum + index;
    }
    console.log("Expensive operation completed and its result : ", sum);   
}


expensiveOperation();
