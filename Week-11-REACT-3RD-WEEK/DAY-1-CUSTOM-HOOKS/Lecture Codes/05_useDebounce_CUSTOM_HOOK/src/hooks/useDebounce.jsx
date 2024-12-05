// Importing the required hooks from React
import { useEffect, useState } from "react";

// Defining a custom hook `useDebounce` which delays the update of a value
export const useDebounce = (value, delay) => {

    // State to store the debounced value
    const [debouncedValue, setDebouncedValue] = useState(value);

    // useEffect runs whenever `value` or `delay` changes
    useEffect(() => {
        // Set up a timer to update the debounced value after the specified delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        // Cleanup function to clear the timer when `value` or `delay` changes or on component unmount
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Dependency array ensures effect runs on changes to `value` or `delay`
    
    // Return the debounced value
    return debouncedValue;
};
