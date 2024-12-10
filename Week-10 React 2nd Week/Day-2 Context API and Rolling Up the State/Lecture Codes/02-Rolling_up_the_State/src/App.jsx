// Import useState from React
import { useState } from "react";

// Main App component
function App() {
    // Render the Parent component
    return (
        <div>
            <Parent />
        </div>
    );
}

// Parent component to manage the count
function Parent() {
    // State for count and function to update it
    const [count, setCount] = useState(0);

    // Render child components
    return (
        <div>
            <Incrase count={count} setCount={setCount} />
            <Decrease count={count} setCount={setCount} />
            <Value count={count} />
        </div>
    );
}

// Button to decrease count
function Decrease({ count, setCount }) {
    return (
        <button onClick={() => setCount(count - 1)}>Decrease</button>
    );
}

// Button to increase count
function Incrase({ count, setCount }) {
    return (
        <button onClick={() => setCount(count + 1)}>Increase</button>
    );
}

// Display the count
function Value({ count }) {
    return (
        <p>Count: {count}</p>
    );
}

// Export App component
export default App;
