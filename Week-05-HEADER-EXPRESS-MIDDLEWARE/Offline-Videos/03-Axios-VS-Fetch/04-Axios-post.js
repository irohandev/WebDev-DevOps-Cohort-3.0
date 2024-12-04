const axios = require("axios");

async function main(){
    const response = await axios.post("https://httpdump.app/dumps/2f36adfc-acb6-455d-ac66-a8a7e5d93979",{
        username:"ABC",
        password:"12345678"
    },
    {
        headers:{
            "authorization": "Bearer 123"
        },
    });
    console.log(response.data);
    
}

/*
Another way of writing the same thing:
async function main(){
    const response = await axios(
    {
        url: "https://httpdump.app/dumps/2f36adfc-acb6-455d-ac66-a8a7e5d93979",
        method: "POST"
        headers:{
                "authorization": "Bearer 123"
            },
        data:{
        username:"ABC"
        }
    }
);
    console.log(response.data);

*/

main();


// Notes:
// - We have to specify in first what kind of request we are sending:

//     - If we are sending a post req :
//             - 1st argument will be the URL,
//             - 2nd argument will be the body part here its the username & password section
//             - 3rd argument part will be the header section 

//     - Now, if we are sending a get req :
//             - 1st argument will the URL
//             - 2nd argument will be the header section 
//             - In get no body section will be there  
    