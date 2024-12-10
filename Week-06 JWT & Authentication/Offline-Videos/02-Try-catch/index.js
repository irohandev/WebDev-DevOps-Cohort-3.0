try {
    // Code that will throw an error because hm result declare kr rhe hai but uspe bina kch dale uske length ka ouput le rhe 
    let result;
    console.log(result.length);
  } catch (error) {
    // Code to handle errors..so try execute nhi ho pyega jaise hi error ayega toh then yeh line execute hoga 
    console.error("An error occurred: ", error.message);
    console.log("Hiii...from CATCH Block-1");
    
  }

  try {
    // Idhar kuch error nhi ayega toh bs try block run ho jyega bs 
    let result = 10;
    console.log(result);
    console.log("Hiii...from TRY Block-2");    
  } catch (error) {
    console.error("An error occurred: ", error.message);
  }

  try {
    // Code that may throw an error
    console.log("Hello..From TRY Block-3");           //yeh line execute hoga..no error in this 

    let a = 10;
    console.log(a);                 //yeh bhi ho jyega execute ..no error in this   
    
    let result ;
    console.log(result.length);            //But here error ayega kyuki bina kuch result mein value diye bina uske length ka output krwa rhe hai..so yeh try block partially run hoga phr catch mein jyega 

  } catch (error) {
    // Code to handle errors
    console.error("An error occurred: ", error.message);
    console.log("Hiii...from CATCH Block-3");
  }
  
  
  