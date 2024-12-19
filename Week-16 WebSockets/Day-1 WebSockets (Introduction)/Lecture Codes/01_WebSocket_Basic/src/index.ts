import { WebSocketServer } from "ws"; // Importing the WebSocket module to create a WebSocket server

// Creating an instance of the WebSocket server that listens on port 8000
const wss = new WebSocketServer({ port: 8000 }); 

// This is an event handler for managing WebSocket connections
// Similar to how HTTP servers have app.get or app.post, here we handle WebSocket events
wss.on("connection", function(socket) { // Executes only when a connection is established
    console.log("User Connected!"); // Displays this message in the terminal whenever a client (e.g., Postman) connects

    // Setting up a function to send data to the client at regular intervals
    setInterval(() => {
        socket.send("Current price of Solana is " + Math.random());
    }, 1000); 
    // Sends a random value (mock price) every second to the connected client, such as in Postman

    // Event handler for receiving messages from the client
    socket.on("message", function(message) { 
        // When the client sends a message (e.g., via Postman), it will be logged in the terminal
        console.log(message.toString()); // Converts the received message to a string and logs it
    });
});

// Notes:
// 1. Open Postman.
// 2. Choose the WebSocket option in Postman.
// 3. Use the WebSocket URL format: ws://localhost:8000 (replace "8000" with the port you configured).
// 4. Establish a connection from Postman to the WebSocket server.
// 5. Once connected, the server will start sending random prices to Postman, and any message sent from Postman will be logged on the server.
