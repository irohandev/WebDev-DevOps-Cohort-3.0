import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
 // State to store chat messages with initial "Hello from server!" message 
 const [messages, setMessages] = useState(["Hello from server!"])
 
 // Refs to store WebSocket connection and input element
 const wsRef = useRef(); // WebSocket connection reference
 const inputRef = useRef(); // Input field reference

 useEffect(() => {
   // Create new WebSocket connection to local server
   const ws = new WebSocket("ws://localhost:8080");
   
   // Handle incoming messages from server
   ws.onmessage = (event) => {
     setMessages(m => [...m, event.data]) // Add new message to messages array
   }

   // Store WebSocket connection in ref for later use
   //@ts-ignore
   wsRef.current = ws;

   // When connection opens, send join room message
   ws.onopen = () => {
     ws.send(JSON.stringify({
       type:"join",
       payload:{
         roomId: "red" // Join room with ID "red"
       }
     }))
   }

   // Cleanup: close WebSocket when component unmounts
   return () => {
     ws.close()
   }
 }, []) // Empty dependency array means this runs once on mount

 return (
   // Main chat interface UI
   <div className='h-screen bg-black'>
     <br /><br /><br />
     <div className='h-[85vh]'>
       {/* Display all messages */}
       {messages.map(message => <div className='m-8'> 
         <span className='bg-white text-black rounded p-4 '>            
           {message} 
         </span>
       </div>)}
     </div>
     {/* Message input and send button */}
     <div className='w-full bg-white flex'>
       <input ref={inputRef} id="message" className="flex-1 p-4"></input>
       <button onClick={() => {
         // @ts-ignore
         const message = inputRef.current?.value;
         // Send chat message through WebSocket
         // @ts-ignore
         wsRef.current.send(JSON.stringify({
           type: "chat",
           payload: {
             message: message
           }
         }))

       }} className='bg-purple-600 text-white p-4'>
         Send message
       </button>
     </div>
   </div>
 )
}

export default App

/*
---------------------- Important Notes ----------------------

Ye code ek real-time chat application implement karta hai. Main points ye hai:

1. WebSocket Connection:
  - Local server se WebSocket connection create karta hai port 8080 pe
  - Connection establish hote hi automatically "red" room mei join ho jata hai
  - Har new message ko messages array mei add karta hai

2. State aur Refs:
  - messages state mei saare chat messages store hote hai
  - wsRef WebSocket connection ko store karta hai taki baad mei use kar sake
  - inputRef input field ko reference karta hai

3. UI Components:
  - Black background ke saath full screen chat interface
  - Upar messages display hote hai white bubbles mei
  - Bottom mei ek input field hai message type karne ke liye
  - Purple send button message bhejne ke liye

4. Message Handling:
  - Send button click hone pe current input value ko WebSocket ke through server ko bhej deta hai
  - Server se aane wale messages automatically display ho jaate hai
  - Messages JSON format mei send hote hai with type aur payload

5. Cleanup:
  - Component unmount hone pe WebSocket connection automatically close ho jata hai

Is code ka basic flow ye hai:
1. Page load -> WebSocket connection -> Room join
2. User message type karta hai -> Send click -> Server ko message jaata hai
3. Server message process karta hai -> Same room ke sabhi users ko message bhejta hai
4. Receiving clients pe message display ho jaata hai

*/