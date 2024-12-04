// Import the Parent component from the local './Parent' file
import Parent from "./Parent";

// App is the main component of the application
function App(){
  return (
    // Fragment (<>) is used to wrap multiple elements without adding an extra DOM node
    <>
      {/* Render the Parent component */}
      <Parent/>
    </>
  );
};

// Export the App component as the default export
export default App;