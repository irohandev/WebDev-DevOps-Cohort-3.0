// Importing the main CSS file for styling the app
import "./App.css";

// Importing RecoilRoot to provide Recoil's context for state management
// Importing hooks to read and set Recoil state values
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';

// Importing the atom (shared state) defined in the counter store
import { counterAtom } from "./store/atoms/counter";

// The main App component
function App() {
  // Wrapping the Counter component with RecoilRoot to provide Recoil state management
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  );
}

// Counter component to hold sub-components for displaying and modifying the counter
function Counter() {
  return (
    <>
      {/* Display the current count */}
      <CurrentCount />
      {/* Button to increase the count */}
      <Increase />
      {/* Button to decrease the count */}
      <Decrease />
    </>
  );
}

// Component to display the current count value
function CurrentCount() {
  // Using Recoil's `useRecoilValue` hook to read the value of `counterAtom`
  const count = useRecoilValue(counterAtom);
  return (
    <>
      {count} {/* Display the current value of count */}
    </>
  );
}

// Component for the "Increase" button
function Increase() {
  // Using Recoil's `useSetRecoilState` hook to update the value of `counterAtom`
  const setCount = useSetRecoilState(counterAtom);

  // Function to increment the counter by 1
  function IncreaseCount() {
    setCount(c => c + 1); // Update state by adding 1 to the current value
  }

  return <button onClick={IncreaseCount}>Increase</button>; // Render the "Increase" button
}

// Component for the "Decrease" button
function Decrease() {
  // Using Recoil's `useSetRecoilState` hook to update the value of `counterAtom`
  const setCount = useSetRecoilState(counterAtom);

  // Function to decrement the counter by 1
  function DecreaseCount() {
    setCount(c => c - 1); // Update state by subtracting 1 from the current value
  }

  return <button onClick={DecreaseCount}>Decrease</button>; // Render the "Decrease" button
}

// Exporting the App component as the default export
export default App;
