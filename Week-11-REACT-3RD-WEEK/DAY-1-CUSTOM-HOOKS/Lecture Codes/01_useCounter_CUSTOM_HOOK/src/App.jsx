// Import the useState hook from React to manage state
import { useState } from "react";

// Custom hook that encapsulates a counter logic
function useCounter() {

  // Declare state variable 'count' and its updater function 'setCount', initialized to 0
  const [count, setCount] = useState(0);

  // Function to increase the value of 'count' by 1
  function increaseCount() {
    setCount(count + 1);
  }

  // Return the state and the function as an object for external use
  return { count, increaseCount };
}

// Main application component
function App() {

  // Render two Counter components
  return (
    <>
      <Counter />
      <Counter />
    </>
  );
}

// Counter component that uses the custom hook 'useCounter'
function Counter() {
  
  // Destructure 'count' and 'increaseCount' from the custom hook 'useCounter'
  const { count, increaseCount } = useCounter();

  // Render a button that displays the current count and triggers 'increaseCount' on click
  return (
    <>
      <button onClick={increaseCount}>Increase: {count}</button>
    </>
  );
}

// Export the App component as the default export
export default App;



// Notes:
// Custom hook bhi ek function hai jiska name "use" se shuru hoga aur woh khdh apne andar ek hook ko use krega...
// Jaise hm programming mai sum() ka program likhtey hai jisse us progrm ko bar bar use kr paye so that same thing the custom hook does..