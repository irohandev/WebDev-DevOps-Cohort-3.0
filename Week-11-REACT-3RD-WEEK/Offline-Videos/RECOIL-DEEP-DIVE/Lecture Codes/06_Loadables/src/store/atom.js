// Import the necessary functions from Recoil to create atoms and selectors
import { atomFamily, selectorFamily } from 'recoil';
// Import axios to make HTTP requests to fetch data
import axios from 'axios';

// Create an atom family for todos, which will allow for dynamic atom creation based on the 'id' parameter
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',  // A unique key to identify this atom family
    default: selectorFamily({
        key: "todoSelectorFamily",  // A unique key to identify the selector family
        get: (id) => async () => {  // Define a function that accepts 'id' and returns a promise for fetching data
            try {
                // Use axios to make a GET request to fetch a todo by 'id' from an API
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos/${id}`  // API URL to fetch todo item by ID
                );
                return response.data;  // Return the response data (todo object) as the default value for the atom
            } catch (error) {
                // If there is an error during the API request, log the error to the console
                console.error("Error fetching todo:", error);
                // Return a fallback object in case of an error
                return { title: "Error loading todo", description: "Please try again later." };
            }
        },
    })
});