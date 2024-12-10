// Import the useState hook from React
import { useState } from 'react';
import './App.css';

// Main application component
function App() {
  // Render the LightBulb component
  return (
    <>
      <LightBulb />
    </>
  );
}

// Component to manage the bulb's state and actions
function LightBulb() {

  // Declare a state variable to track if the bulb is on and a function to update it
  const [bulbOn, setBulbOn] = useState(true);

  // Render the BulbState and ToggleBulbState components
  return (
    <>
      {/* Pass the bulbOn state to BulbState */}
      <BulbState bulbOn={bulbOn} />

      {/* Pass bulbOn and setBulbOn to ToggleBulbState */}
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </>
  );
}

// Component to display the current state of the bulb
function BulbState({ bulbOn }) {

  // Show whether the bulb is on or off
  return (
    <>
      {bulbOn ? "Bulb On" : "Bulb Off"}
    </>
  );
}

// Component to toggle the state of the bulb
function ToggleBulbState({ bulbOn, setBulbOn }) {
  
  // Function to change the state of the bulb
  function toggle() {
    setBulbOn(!bulbOn); // Update the bulb's state to the opposite value
  }

  // Render a button to toggle the bulb's state
  return (
    <>
      <button onClick={toggle}>Toggle!</button>
    </>
  );
}

// Export the App component so it can be used in other files
export default App;
