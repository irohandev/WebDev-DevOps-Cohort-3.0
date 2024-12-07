// Importing required React hooks and memo for optimization
import { useState, useEffect, memo } from "react";
import "./App.css";

// Main App component rendering the Counter component
function App() {
  return (
    <>
      <Counter />
    </>
  );
}

// Counter component that manages the count state and contains the child components
function Counter() {
  // State to hold the current count value
  const [count, setCount] = useState(0);

  // useEffect to set up an interval that increments the count every 3 seconds
  useEffect(() => {
    // Setting up an setInterval to update the count
    setInterval(() => {
      setCount(c => c + 1); // Incrementing the count
    }, 3000);
  }, []);

  return (
    <>
      {/* Displaying the current count */}
      <CurrentCount />
      {/* Button to increase the count */}
      <Increase />
      {/* Button to decrease the count */}
      <Decrease />
    </>
  );
}

// Display the current count value
const CurrentCount = memo(function () {
  // `memo` prevents unnecessary re-renders if the count value doesn't change
  return (
    <>
      <h1>1</h1> {/* Placeholder for current count */}
    </>
  );
});

// Button to increase the count value
const Increase = memo(function () {
  // Function to handle the increase action (not implemented yet)
  function IncreaseCount() {}

  return (
    <>
      <button onClick={IncreaseCount}>Increase</button>
    </>
  );
});

// Button to decrease the count value
const Decrease = memo(function () {
  // Function to handle the decrease action (not implemented yet)
  function DecreaseCount() {}

  return (
    <>
      <button onClick={DecreaseCount}>Decrease</button>
    </>
  );
});

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
