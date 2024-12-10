import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/counter";
import './App.css';

function App() {
  return (
    <>
      <RecoilRoot>
        <Buttons />  {/* Buttons component to increase or decrease counter */}
        <Counter />  {/* Counter component to display the counter value */}
        <IsEven />   {/* IsEven component to check if the counter value is even or odd */}
      </RecoilRoot>
    </>
  )
}

function Buttons() {
  const setCount = useSetRecoilState(counterAtom);  // Hook to update the counter atom value

  function increase() {
    setCount(c => c + 3);  // Increases the counter by 3
  }

  function decrease() {
    setCount(c => c - 1);  // Decreases the counter by 1
  }

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

function Counter() {
  const count = useRecoilValue(counterAtom);  // Fetches the current counter value from the atom
  return (
    <>
      <h1>{count}</h1>  {/* Displays the current value of the counter */}
    </>
  )
}

function IsEven() {
  const even = useRecoilValue(evenSelector);  // Fetches the result from the selector (even or odd)
  return (
    <>
      {even ? "Counter is now EVEN number" : "Counter is now ODD number"}  {/* Displays whether the counter is even or odd */}
    </>
  )
}

export default App;

// Notes:
// Here we are using a selector that is a part of the atom. The atom will have a derived function 
// which can be anything. In our current program, this function checks whether the number is odd or even.
// For odd/even check, the function is passed to the selector.
// The Buttons and Counter components are dependent on the atom. The "IsEven" component gets the value from the atom, 
// then passes it through the selector function to check if the number is even or odd and displays the result.