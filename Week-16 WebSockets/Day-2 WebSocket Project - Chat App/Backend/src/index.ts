// Import WebSocket-related classes from the 'ws' package
import { WebSocketServer, WebSocket } from "ws";

// Create a WebSocket server instance listening on port 8080
const wss = new WebSocketServer({port : 8080});

// Define a User interface to type the connection information
// Each user has a WebSocket connection and belongs to a specific room
interface User{
    socket: WebSocket;
    room: string
}

// Array to store all active WebSocket connections and their room assignments
let allSockets : User[] = [];

// Listen for new WebSocket connections
wss.on("connection", (socket) => {
    // Handle incoming messages from clients
    socket.on("message", (message) => {
        // Parse the incoming message from JSON string to object
        // @ts-ignore is used to bypass TypeScript type checking for the JSON.parse
        const parsedMessage = JSON.parse(message);

        // Handle 'join' message type - when a user wants to join a room
        if(parsedMessage.type === "join"){
            // Add the new user to allSockets array with their socket and requested room
            allSockets.push({
                socket,
                room : parsedMessage.payload.roomId
            })
        }

        // Handle 'chat' message type - when a user sends a chat message
        if (parsedMessage.type  === "chat"){
            // Find the room of the user who sent the message
            let currentUserRoom = null;
            for(let i =0; i<allSockets.length; i++){
                if(allSockets[i].socket === socket){
                    currentUserRoom = allSockets[i].room
                }
            }

            // Broadcast the message to all users in the same room
            for(let i =0; i<allSockets.length; i++){
                if(allSockets[i].room === currentUserRoom){
                    allSockets[i].socket.send(parsedMessage.payload.message)
                }
            }
        }
    })
})