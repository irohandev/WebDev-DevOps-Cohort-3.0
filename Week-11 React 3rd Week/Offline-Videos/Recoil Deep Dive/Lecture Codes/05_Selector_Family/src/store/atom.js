import { atomFamily, selectorFamily } from 'recoil'; // Import atomFamily and selectorFamily from Recoil
import axios from 'axios'; // Import axios to make HTTP requests

// Define an atom family to manage the todos state dynamically based on the ID
export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily', // Unique key for the atomFamily
    default: selectorFamily({
        key: "todoSelectorFamily", // Unique key for the selectorFamily
        get: (id) => async () => { // Define the get function which takes 'id' as a parameter to fetch data
            try {
                // Make an API call to fetch todo data for the given 'id'
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/todos/${id}`
                );
                return response.data; // Return the fetched data directly
            } catch (error) {
                // If an error occurs while fetching data, log the error and return fallback data
                console.error("Error fetching todo:", error);
                return { title: "Error loading todo", description: "Please try again later." }; // Fallback data
            }
        },
    })
});