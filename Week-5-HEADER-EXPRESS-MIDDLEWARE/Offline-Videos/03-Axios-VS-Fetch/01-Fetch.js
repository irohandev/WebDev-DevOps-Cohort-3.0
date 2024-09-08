// Here fetch is written using the .then syntax
// function main(){
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async(response) =>{
//             const json = await response.json();
//             console.log(json.todos.length)
//             await response.text()
//         })
// }

// Just a cleaner syntax of the above using async wait -
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos")
    const json = await response.json();
    console.log(json.todos.length);
}

main();
