import { useState } from "react"; // Importing useState hook from React
import "./App.css" // Importing the CSS file for styling

// Main App component
function App(){ 
  return(
    <>
      <Counter/> {/* Rendering the Counter component */}
    </>
  )
}

// Counter component that manages the count state
function Counter(){ 
  const [count, setCount] = useState(0); // Defining state for count and function to update it
  return(
    <>
      <CurrentCount count={count}/> {/* Rendering the current count */}
      <Increase setCount={setCount} count={count}/> {/* Button to increase the count */}
      <Decrease setCount={setCount} count={count}/> {/* Button to decrease the count */}
    </>
  )
}

// Component to display the current count value
function CurrentCount({count}){ 
  return(
    <>
      {count} {/* Displaying the count */}
    </>
  )
}

// Component to increase the count
function Increase({setCount, count}){ 
  function IncreaseCount(){ // Function to increase count by 1
    setCount(count+1) // Updating the count state
  }
  return(
    <>
      <button onClick={IncreaseCount}>Increase</button> {/* Button to trigger count increase */}
    </>
  )
}

// Component to decrease the count
function Decrease({setCount, count}){ 
  function DecreaseCount(){ // Function to decrease count by 1
    setCount(count-1) // Updating the count state
  }
  return(
    <>
      <button onClick={DecreaseCount}>Decrease</button> {/* Button to trigger count decrease */}
    </>
  )
}

export default App; // Exporting the App component for use in other files
