// Import useState from React to manage state
import { useState } from "react";

// Create the main App component
function App() {

    // State to check if the bulb is on or off, and a function to change it
    const [bulbOn, setBulbOn] = useState(true);

    // Function to change the bulb state
    function toggleBulb() {

        // Switch the bulb state (on to off, or off to on)
        setBulbOn(!bulbOn);
    }

    // Return the UI
    return (

        <div>
            {/* Show the Light component with bulb state and toggle function */}
            <Light bulbOn={bulbOn} toggleBulb={toggleBulb} />
        </div>
    );
}

// Light component takes bulb state and toggle function as input
function Light({ bulbOn, toggleBulb }) {

    // Return UI for LightBulb and LightSwitch components
    return (

        <div>

            {/* Show the LightBulb with bulb state */}
            <LightBulb bulbOn={bulbOn} />

            {/* Show the LightSwitch with toggle function */}
            <LightSwitch toggleBulb={toggleBulb} />
        </div>
    );
}

// LightBulb component takes bulb state as input
function LightBulb({ bulbOn }) {

    // Show "Bulb is on" or "Bulb is off" based on bulb state
    return <div>{bulbOn ? "Bulb is on" : "Bulb is off"}</div>;
}

// LightSwitch component takes toggle function as input
function LightSwitch({ toggleBulb }) {
  
    // Show a button to toggle the bulb when clicked
    return (
        <div>
            <button onClick={toggleBulb}>Toggle the Bulb</button>
        </div>
    );
}

// Export App as the default component
export default App;
