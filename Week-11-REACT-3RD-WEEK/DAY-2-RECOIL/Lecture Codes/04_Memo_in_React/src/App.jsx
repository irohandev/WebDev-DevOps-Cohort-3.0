// Import necessary hooks and utilities from React
import { useState, useEffect, memo } from "react";

// Main App component that will render the root structure
function App() {
    return (
        <div>
            {/* Render the Counter component */}
            <Counter />
        </div>
    );
}

// Counter component manages the count state and includes logic for auto-increment
function Counter() {
    const [count, setCount] = useState(0);

    // useEffect to set up an interval that increments count every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((c) => c + 1); // Increment count by 1
        }, 3000);

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures effect runs only once

    return (
        <div>
            {/* Display the current count */}
            <CurrentCount count={count} />

            {/* Render Increase and Decrease components with setCount passed as a prop */}
            <Increase setCount={setCount} />
            <Decrease setCount={setCount} />
        </div>
    );
}

// Memoized component to display the current count
const CurrentCount = memo(function ({ count }) {
    return (
        // Display the count value
        <h1>{count}</h1>
    );
});

// Memoized component for decreasing the count
const Decrease = memo(function ({ setCount }) {
    function decrease() {
        setCount((c) => c - 1); // Decrease count by 1
    }

    return (
        // Button to decrease the count
        <button onClick={decrease}>Decrease</button>
    );
});

// Memoized component for increasing the count
const Increase = memo(function ({ setCount }) {
    function increase() {
        setCount((c) => c + 1); // Increase count by 1
    }

    return (
        // Button to increase the count
        <button onClick={increase}>Increase</button>
    );
});

// Export the App component as the default export
export default App;

/*
Notes:
- `memo` is used to optimize rendering by preventing unnecessary re-renders of the child components. 
  It ensures that the child components only re-render when their props change.

- Without `memo`, all child components (CurrentCount, Increase, Decrease) would re-render every 
  time the parent (Counter) updates due to the `setInterval` in the useEffect.

- By using `memo`, even when the interval updates the count state, only the specific component 
  affected by the state change (CurrentCount in this case) will re-render, making the application 
  more efficient.
*/
