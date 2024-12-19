## Setting Up a TypeScript Project with WebSockets

Follow these steps to set up a TypeScript project using `ws` (WebSocket library):

1. **Initialize the Project**:
   ```bash
   npm init -y
   ```

2. **Add a Script to `package.json`**:
   Update the `scripts` section of your `package.json` file to include the following:
   
   ```json
   "scripts": {
       "dev": "tsc -b && node ./dist/index.js"
   }
   ```

3. **Install TypeScript**:
   ```bash
   npm i typescript
   ```

4. **Initialize TypeScript Configuration**:
   ```bash
   npx tsc --init
   ```

   This will generate a `tsconfig.json` file for TypeScript configuration.

5. **Install WebSocket Library and Type Definitions**:
   ```bash
   npm i ws @types/ws
   ```

6. **Run the Project**:
   Start the development server with the following command:
   ```bash
   npm run dev
   ```

---
### Summary
- `tsc -b`: Builds the TypeScript project.
- `node ./dist/index.js`: Runs the compiled JavaScript output.
- `ws`: WebSocket library for Node.js.
- `@types/ws`: TypeScript definitions for the `ws` library.

---
## 1. What is WebSocket?

A WebSocket is a communication protocol that provides full-duplex, persistent and bidirectional communication over a single TCP connection. Unlike HTTP, which is stateless and requires repeated requests to maintain communication, WebSocket allows the client and server to send and receive data in real-time without repeatedly establishing a new connection. WebSockets are often used in real-time applications like chat apps, stock trading platforms, online gaming, and live notifications.

### How WebSocket Works:
- **Handshake**: The client initiates the WebSocket handshake by sending an HTTP request with the Upgrade header set to websocket.
- **Connection Established**: If the server accepts the handshake, the protocol switches from HTTP to WebSocket, and a persistent connection is established.
- **Data Exchange**: Both client and server can send data to each other at any time during the connection.
- **Closing**: Either the client or server can close the connection when no longer needed.

### Key Features:
- **Real-Time Communication**: Allows for immediate data exchange without polling.
- **Persistent Connection**: Reduces latency compared to HTTP request-response cycles.
- **Lightweight**: Minimal overhead compared to traditional HTTP-based communication.

### **Use Cases for WebSockets:**
- **Real-Time Applications**: Chat applications, live sports updates, real-time gaming, and any application requiring instant updates can benefit from WebSockets.
- **Live Feeds**: Financial tickers, news feeds, and social media updates are examples where WebSockets can be used to push live data to users.
- **Interactive Services**: Collaborative editing tools, live customer support chat, and interactive webinars can use WebSockets to enhance user interaction.

### Example Code:

#### Server-side (Node.js with ws library):
```javascript
const WebSocket = require('ws');
// Create a WebSocket server
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    // Listen for messages from the client
    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        
        // Broadcast the message to all connected clients
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Message from server: ${message}`);
            }
        });
    });

    // Handle connection closure
    socket.on('close', () => {
        console.log('Client disconnected');
    });
});
```
#### Client-side (HTML and JavaScript):
```html
<!DOCTYPE html>
<html>
<head>
    <title>WebSocket Chat</title>
</head>
<body>
    <h1>WebSocket Chat</h1>
    <input id="messageInput" type="text" placeholder="Type a message" />
    <button onclick="sendMessage()">Send</button>
    <div id="messages"></div>

    <script>
        // Connect to the WebSocket server
        const socket = new WebSocket('ws://localhost:8080');

        // Display messages from the server
        socket.onmessage = (event) => {
            const messagesDiv = document.getElementById('messages');
            const newMessage = document.createElement('p');
            newMessage.textContent = event.data;
            messagesDiv.appendChild(newMessage);
        };

        // Send a message to the server
        function sendMessage() {
            const input = document.getElementById('messageInput');
            const message = input.value;
            socket.send(message);
            input.value = '';
        }
    </script>
</body>
</html>
```
---

## 2. Why not use HTTP/REST? Why do you need WebSockets (ws)?

- **Network Handshake** happens for every request in HTTP, adding overhead.
- **No way to push server-side events**: While polling is possible, it is not efficient or optimal.
- **Reduces bandwidth consumption**: WebSockets are ideal for IoT devices, collaborative apps, and live dashboards.
- **Essential for server-initiated updates**: Scenarios like live notifications, chat messages, or streaming data require the server to actively push updates.
- **Ideal for frequent or constant data exchange**: Unlike HTTP, WebSockets eliminate the repeated overhead of creating and closing connections.

## 3. What is Scaling in WS servers?
Scaling WebSocket servers requires careful planning to ensure the system can handle a high number of simultaneous connections and maintain low latency. Below are the techniques and strategies for scaling WebSocket servers:

1. **Horizontal Scaling with Load Balancers**
WebSocket servers can be scaled horizontally across multiple instances using a load balancer.

**Key Challenge**:
WebSockets are stateful and require a persistent connection, unlike HTTP which is stateless.
Load balancers need to ensure that once a WebSocket connection is established, all subsequent messages for that connection are routed to the same server instance.

**Solution**:
Use sticky sessions (session affinity) in load balancers to route WebSocket traffic consistently to the same server.

2. **Scaling with Message Brokers (Pub/Sub Pattern)**
To enable communication across multiple WebSocket server instances, use a message broker. This is useful for broadcasting messages to all connected clients or routing messages between different servers.

**Key Components**:
- WebSocket Servers: Run multiple server instances.
- Message Broker: A central system to publish and subscribe to messages (e.g., Redis, RabbitMQ, Kafka).
- Clients: Connected to any server instance.

**How It Works**:
- WebSocket servers subscribe to the same message broker.
- When a server receives a message, it publishes the message to the broker.
- All subscribed WebSocket servers receive the message and forward it to the appropriate connected clients.

3. **Stateless WebSocket Connections with Sticky Sessions**
If possible, design WebSocket servers to be stateless by offloading client-related states (like user data) to an external service like:

- Redis
- DynamoDB
- Memcached

This allows servers to scale independently, as state management is centralized.

4. **Using Cloud Providers for Managed WebSocket Services**
Many cloud providers offer managed WebSocket services to simplify scaling:

- **AWS API Gateway WebSockets**: Scales automatically and integrates with Lambda.
- **Azure Web PubSub**: A fully managed service for real-time communication.
- **Google Cloud Pub/Sub + WebSocket**: Combines Pub/Sub with scalable backend servers.

These services abstract the infrastructure complexity and are ideal for large-scale real-time applications.

5. **Auto-Scaling WebSocket Servers**
To handle variable loads:

- Deploy WebSocket servers in containers (e.g., Docker).
- Use an orchestrator like Kubernetes or AWS ECS to scale the containers automatically.

6. **Monitoring and Performance Optimization**
To ensure smooth scaling:

- Use monitoring tools like Prometheus, Grafana, or Datadog.

---
### Summary of Techniques:
| **Strategy**                     | **Key Tool/Approach**          |
|----------------------------------|--------------------------------|
| Horizontal Scaling with LB       | NGINX, HAProxy, AWS ALB        |
| Pub/Sub Pattern                  | Redis, RabbitMQ, Kafka         |
| Stateless Server Design          | Redis, DynamoDB, Memcached     |
| Managed WebSocket Services       | AWS API Gateway, Azure PubSub  |
| Auto-Scaling Containers          | Docker, Kubernetes             |
| Monitoring and Optimization      | Prometheus, Grafana            |

By combining horizontal scaling with message brokers and load balancers, you can efficiently scale WebSocket servers to handle a large number of concurrent connections. 🚀

Now your TypeScript project is set up to use WebSockets!
