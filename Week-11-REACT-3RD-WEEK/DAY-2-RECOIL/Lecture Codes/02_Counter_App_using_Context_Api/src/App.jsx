// Import required React hooks and CSS
import { useState, useContext, createContext } from "react";
import './App.css';

// Create a Context for managing count state
const CountContext = createContext();

function CountContextProvider({ children }) {
  // Define state variables for count and setCount
  const [count, setCount] = useState(0);

  // Provide the count and setCount values to child components
  return (
    <CountContext.Provider value={{ count, setCount }}>
      {children}
    </CountContext.Provider>
  );
}

function App() {
  // Render the Parent component as the root
  return (
    <Parent />
  );
}

function Parent() {
  // Wrap child components with the CountContextProvider
  return (
    <CountContextProvider>
      <Increase />
      <Decrease />
      <Value />
    </CountContextProvider>
  );
}

function Increase() {
  // Access count and setCount from CountContext
  const { count, setCount } = useContext(CountContext);

  // Render a button to increase the count
  return (
    <button onClick={() => setCount(count + 1)}>Increase</button>
  );
}

function Decrease() {
  // Access count and setCount from CountContext
  const { count, setCount } = useContext(CountContext);

  // Render a button to decrease the count
  return (
    <button onClick={() => setCount(count - 1)}>Decrease</button>
  );
}

function Value() {
  // Access count from CountContext
  const { count } = useContext(CountContext);

  // Display the current count value
  return <p>Count: {count}</p>;
}

export default App;
