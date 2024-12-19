import { useEffect, useRef, useState } from 'react'; // Import necessary hooks from React
import './App.css' // Import the styles for the application

function App() {

  // Declare state variable for storing the WebSocket connection
  const [socket, setSocket] = useState();

  // Declare a reference for the input element to get its value
  const inputRef = useRef();

  // Function to send the message when the button is clicked
  function sendMessage(){

    if(!socket){
      return
    }
    
    // @ts-ignore: Ignore TypeScript errors for now (inputRef might be null or undefined)
    const message = inputRef.current.value; // Get the value of the input field
    
    // @ts-ignore: Ignore TypeScript errors for socket if not properly typed
    socket.send(message); // Send the message through the WebSocket
  }

  // useEffect hook to establish the WebSocket connection when the component is mounted
  useEffect(() => {
    // Create a new WebSocket connection to the server
    const ws = new WebSocket("ws://localhost:8000");

    // @ts-ignore: Ignore TypeScript errors for setSocket method if not typed properly
    setSocket(ws); // Set the WebSocket connection to state

    // Event listener for receiving messages from the WebSocket server
    ws.onmessage = (event) => {
      alert(event.data); // Show the received message in an alert
    }

  },[]) // Empty dependency array ensures the effect runs only once when the component is mounted

  return (
    <>
      <h1>Ping_Pong Chat Application</h1> {/* Title of the application */}
      
      {/* Input field for user to type the message */}
      <input ref={inputRef} placeholder="Message....." />
      
      {/* Button to trigger sendMessage function when clicked */}
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App; // Export the App component to be used in other parts of the application
