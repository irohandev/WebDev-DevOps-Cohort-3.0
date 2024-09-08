const axios = require("axios");

// async function main(){
//     const response = await fetch("https://sum-server.100xdevs.com/todos")
//     const json = await response.json();
//     console.log(json.todos.length);
// }

async function main(){
    const response = await axios.get("https://sum-server.100xdevs.com/todos");
    console.log(response.data.todos.length);
}


main();


/*
Notes:
- Axios has more cleaner syntax comapred to fetch 
- In axios we provide what kind od request we want like the get, post 
*/