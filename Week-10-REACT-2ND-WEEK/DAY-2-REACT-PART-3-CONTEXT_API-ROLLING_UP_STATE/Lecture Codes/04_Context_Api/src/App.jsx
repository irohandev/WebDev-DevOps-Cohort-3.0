// Method - 1 jab hmlg same file useContext ko import kr rhe hai same file mai context aur provider bana rhe hai now agar hm custom ek alag file bana diye context aur provider ka tab codde kuch aisa hoga see Method-2 
// import { useState, createContext, useContext } from "react";

// // Create a Context for the Bulb state
// const BulbContext = createContext();

// function App() {
//   // State to track if the bulb is on or off
//   const [bulbOn, setBulbOn] = useState(true);

//   return (
//     <>
//       {/* Provide the Bulb state and its setter to the components */}
//       <BulbContext.Provider value={{ bulbOn: bulbOn, setBulbOn: setBulbOn }}>
//         <Light />
//       </BulbContext.Provider>
//     </>
//   );
// }

// function Light() {
//   return (
//     <>
//       {/* Render the LightBulb and LightSwitch components */}
//       <LightBulb />
//       <LightSwitch />
//     </>
//   );
// }

// function LightBulb() {
//   // Access the bulbOn state from the context
//   const { bulbOn } = useContext(BulbContext);

//   return (
//     <>
//       {/* Display "Bulb On" if bulbOn is true, otherwise "Bulb Off" */}
//       {bulbOn ? "Bulb On" : "Bulb Off"}
//     </>
//   );
// }

// function LightSwitch() {
//   // Access the bulbOn state and the setBulbOn function from the context
//   const { bulbOn, setBulbOn } = useContext(BulbContext);

//   // Function to toggle the bulb state
//   function toggle() {
//     setBulbOn(!bulbOn);
//   }

//   return (
//     <div>
//       {/* Button to toggle the bulb state */}
//       <button onClick={toggle}>Toggle</button>
//     </div>
//   );
// }

// export default App;


//Method-2..idhr hmne ek custom BulbContextProvider.jsx file bnaya aur uspe yeh context wla part kiya aur sare values wagera udhr set kiye and idhar usko import krenge!


// Importing the useContext hook from React
import { useContext } from "react";

// Importing the context provider and the context object
import { BulbContextProvider, BulbContext } from "./BulbContextProvider";

function App() {

    // The main App component wraps its children with the BulbContextProvider
    return (
        <BulbContextProvider>
            {/* Providing the context to the Light component and its children */}
            <Light />
        </BulbContextProvider>
    );
}

function Light() {

    // The Light component is a container for LightBulb and LightSwitch
    return (
        <div>
            <LightBulb />
            <LightSwitch />
        </div>
    );
}

function LightBulb() {

    // Accessing the context value (bulbOn) using the useContext hook
    const { bulbOn } = useContext(BulbContext);

    return (
        <div>
            {/* Conditionally rendering text based on the value of bulbOn */}
            {bulbOn ? "Bulb is on" : "Bulb is off"}
        </div>
    );
}

function LightSwitch() {

    // Accessing both the context value (bulbOn) and the updater function (setBulbOn)
    const { bulbOn, setBulbOn } = useContext(BulbContext);

    function toggleBulb() {
        // Function to toggle the state of the bulb
        setBulbOn(!bulbOn);
    }

    return (
        <div>
            {/* Button to toggle the bulb state on click */}
            <button onClick={toggleBulb}>Toggle the Bulb</button>
        </div>
    );
}

// Exporting the App component as the default export
export default App; 


















// Notes:
// Context Api ka use prop drilling ke issue solve karne k liye krenge
// props ko hm sbse outer parent se uske child mai bhjnge phir child k sub chcild dmai tab jakr woh sub child mai ayega toh use higa woh 
// But context api help krega direct parent se sub child pe props ko use krne se allow krega ..jaise ki woh direct teleport kr dega woh jidhr hmko props ko use krna hoga us place mai 