// Import useState and useRef from react
import { useState, useRef } from "react";

// Create a function component named App that will be rendered in the root element
function App() {
  // Return the JSX of the component
  return (
    // Create a div element
    <>
        {/* Render the FocusInput component */}
        <FocusInput />
    </>
  );
}

// Create a function component named FocusInput that will be rendered in the App component
function FocusInput() {
  // Create a reference to the input element using the useRef hook
  const inputRef = useRef(null);

  // Create a function named focusOnInput that will focus on the input element
  function focusOnInput() {
      // document.getElementById("name").focus();   -- Yeh bhi kr skte the but in react we will use useRef hook for accessing the DOM elements

      // Focus on the input element using the ref attribute
      inputRef.current.focus();
  }

  // Return the JSX of the component
  return (
      // Create a div element
      <div>
          <h2>Focus Input</h2>

          {/* Create an input element with an id of name and a ref attribute */}
          <input type="text" id="name" ref={inputRef} />

          {/* Create a button element with an onClick event handler */}
          <button onClick={focusOnInput}>Submit</button>
      </div>
  );
}

export default App;
// Notes:-
//If we use two input tag and agar focus wla uspe set krenge then also hmesa focus first wle pe jyega if we use document.getEleementById..kyuki sabke pass ek id hoga aur sbse first id pe jyega woh ...
//So thats why we use useRef ki jis refrence pe point kr rha hai focus wahi pe jaye 


