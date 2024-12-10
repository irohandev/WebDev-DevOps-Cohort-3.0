// Importing the useState hook from React
import { useState } from "react"; 

// Importing the custom hook usePrev from the local hooks directory
import { usePrev } from "./hooks/usePrev"; 

// Defining the main App component
function App() {
    // Declaring a state variable 'state' with an initial value of 0 
    // and a function 'setState' to update its value
    const [state, setState] = useState(0); 
    
    // Using the custom usePrev hook to get the previous value of 'state'
    const prev = usePrev(state); 

    return (
        <>
            {/* Displaying the current state */}
            <p>{state}</p> 
            
            {/* Button to increment the state value by 1 when clicked */}
            <button onClick={() => { setState((current) => current + 1); }}>
                Click to Update Value
            </button> 
            
            {/* Displaying the previous value of the state */}
            <p>The previous value was = {prev}</p> 
        </>
    );
}

// Exporting the App component as the default export
export default App;
