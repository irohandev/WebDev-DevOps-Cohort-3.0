// Import useState and useRef hooks from React library
import { useState, useRef } from "react";

// Create a component called App
function App() {
    // Show the Stopwatch component on the screen
    return (
        <div>
            <Stopwatch />
        </div>
    );
}

// Create a component called Stopwatch
function Stopwatch() {
    // Set up a state variable to keep track of time (currentCount)
    const [currentCount, setCurrentCount] = useState(0);

    // Use a reference to hold the timer (so it can be started and stopped)
    const timer = useRef(null);

    // Function to start the stopwatch
    function startClock() {
        // Start a timer that increases currentCount by 1 every second
        let value = setInterval(() => {
            setCurrentCount((count) => count + 1);
        }, 1000);

        // Save the timer ID in the timer reference
        timer.current = value;
    }

    // Function to stop the stopwatch
    function stopClock() {
        // Print the timer information to the console
        console.log(timer);

        // Stop the timer using clearInterval
        clearInterval(timer.current);
    }

    // Show the stopwatch UI
    return (
        <div>
            {/* Title for the stopwatch */}
            <h1>Stopwatch</h1>

            {/* Show the current count */}
            {currentCount}
            <br />

            {/* Buttons to start and stop the stopwatch */}
            <button onClick={startClock}>Start</button>
            <button onClick={stopClock}>Stop</button>
        </div>
    );
}

// Make the App component available for use in other files
export default App;
