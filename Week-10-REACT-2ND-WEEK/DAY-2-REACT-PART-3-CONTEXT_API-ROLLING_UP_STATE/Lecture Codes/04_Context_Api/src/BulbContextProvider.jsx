// Import required functions from React
import { createContext, useState } from "react";

// Create a Context object for the Bulb state
const BulbContext = createContext();

// Define the context provider component
function BulbContextProvider({ children }) {
    
    // Create a state variable `bulbOn` with default value `true` and its setter `setBulbOn`
    const [bulbOn, setBulbOn] = useState(true);

    return (
        // Use the Context Provider to make `bulbOn` and `setBulbOn` accessible to child components
        <BulbContext.Provider
            value={{
                bulbOn, // Current state of the bulb (on/off)
                setBulbOn, // Function to update the state of the bulb
            }}
        >
            {children} {/* Render child components */}
        </BulbContext.Provider>
    );
}

// Export the Context Provider and the Context object for use in other components
export { BulbContextProvider, BulbContext };
