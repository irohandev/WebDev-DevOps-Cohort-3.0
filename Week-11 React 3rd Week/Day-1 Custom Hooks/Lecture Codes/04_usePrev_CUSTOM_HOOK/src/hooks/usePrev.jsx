// Importing useEffect and useRef hooks from React
import { useEffect, useRef } from "react";

// Custom hook to track the previous value of a variable
export function usePrev(value) {
    
    // Create a ref to store the previous value
    const ref = useRef();
    
    // Update the ref's current value whenever the provided value changes
    useEffect(() => {
        ref.current = value; // Store the current value in the ref
    }, [value]); // Dependency array ensures this runs only when 'value' changes

    // Return the previous value stored in the ref
    return ref.current;
}
