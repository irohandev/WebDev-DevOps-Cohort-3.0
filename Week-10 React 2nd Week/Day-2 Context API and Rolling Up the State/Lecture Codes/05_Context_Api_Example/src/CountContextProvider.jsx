// Importing necessary hooks from React
import { createContext, useState } from "react";

// Creating a new context called CountContext
const CountContext = createContext();

// Defining a provider component that will wrap other components to provide access to the context
function CountContextProvider({children}) {
    
    // Initializing a state variable 'count' with a default value of 0 and a function 'setcount' to update it
    const [count, setCount] = useState(0);

    return (
        // Providing the context value to child components
        <CountContext.Provider 
            value={{
                count,        // The current value of 'count'
                setCount      // The function to update 'count'
            }}>
            {children}     
        </CountContext.Provider>
    );
}

// Exporting the context and provider so they can be imported and used in other parts of the app
export { CountContext, CountContextProvider };
