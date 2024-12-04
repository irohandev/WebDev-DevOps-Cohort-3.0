import { useContext } from "react"; 
import { CountContext, CountContextProvider } from "./CountContextProvider"; 

// Parent component that wraps child components with CountContextProvider
function Parent(){ 

  return ( 

    // Provides the context for all child components
    <CountContextProvider> 
    
      {/* Components that will interact with the shared count state */}
      <Increase/> 
      <Decrease/> 
      <Value/> 
    </CountContextProvider> 
  ); 
} 

// Component to increase the count
function Increase(){ 
  // Extract setCount function from the context
  const {setCount} = useContext(CountContext);          // Note: We don't need to extract 'count' here because ....we're using the functional update form of setState
  
  return( 
    // Increment count by 1 when button is clicked
    <button onClick={()=> setCount(count => count + 1)}>
      Increase
    </button> 
  ); 
} 

// Component to decrease the count
function Decrease(){ 

  // Extract setCount function from the context
  const {setCount} = useContext(CountContext); 
  
  return( 
    // Decrement count by 1 when button is clicked
    <button onClick={()=> setCount(count => count - 1)}>
      Decrease
    </button> 
  ); 
} 

// Component to display the current count value
function Value(){ 

  // Extract current count value from the context
  const {count} = useContext(CountContext)          //Note : Here the current value is being shown so we need to tak the count value here !
  
  return( 
    // Display the current count
    <p>Count : {count}</p> 
  ); 
} 

export default Parent;