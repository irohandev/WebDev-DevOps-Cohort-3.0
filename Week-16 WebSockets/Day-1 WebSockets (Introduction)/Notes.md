# Setting Up a TypeScript Project with WebSockets

This guide explains how to set up a TypeScript project with WebSockets using the `ws` library.

---

## Steps to Set Up the Project

### 1. Initialize the Project
Run the following command to create a new Node.js project:
```bash
npm init -y
```

### 2. Add a Script to `package.json`
Update the `scripts` section in your `package.json` file:
```json
"scripts": {
    "dev": "tsc -b && node ./dist/index.js"
}
```

### 3. Install TypeScript
Install TypeScript as a development dependency:
```bash
npm i typescript
```

### 4. Initialize TypeScript Configuration
Generate a TypeScript configuration file (`tsconfig.json`) with:
```bash
npx tsc --init
```

### 5. Install WebSocket Library and Type Definitions
Add the `ws` library and its TypeScript definitions:
```bash
npm i ws @types/ws
```

### 6. Run the Project
Start the development server with:
```bash
npm run dev
```

---

## Key Commands and Their Purpose

| Command                    | Purpose                                      |
|----------------------------|----------------------------------------------|
| `tsc -b`                   | Builds the TypeScript project.               |
| `node ./dist/index.js`     | Runs the compiled JavaScript output.         |
| `ws`                       | WebSocket library for Node.js.               |
| `@types/ws`                | TypeScript definitions for the `ws` library. |

---

## What is WebSocket?

A WebSocket is a protocol that allows **real-time, bidirectional communication** over a single TCP connection. Unlike HTTP, WebSockets maintain a **persistent connection** for continuous data exchange.

### Key Features:
- **Real-Time Communication**: Immediate data exchange without polling.
- **Persistent Connection**: Reduces latency compared to HTTP.
- **Lightweight**: Minimal overhead.

### Use Cases:
- Chat apps, live gaming, stock trading platforms, and live notifications.

---

## How WebSockets Work

1. **Handshake**: The client sends an HTTP request with an `Upgrade` header to switch to WebSocket.
2. **Connection Established**: Server accepts, switching to WebSocket protocol.
3. **Data Exchange**: Both sides exchange data freely.
4. **Closing**: Connection closes when no longer needed.

---

## Example Code

### Server-Side (Node.js with `ws` library)
```javascript
const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log(`Received: ${message}`);
        server.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(`Server: ${message}`);
            }
        });
    });

    socket.on('close', () => console.log('Client disconnected'));
});
```

### Client-Side (HTML + JavaScript)
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
        const socket = new WebSocket('ws://localhost:8080');

        socket.onmessage = (event) => {
            const messagesDiv = document.getElementById('messages');
            const newMessage = document.createElement('p');
            newMessage.textContent = event.data;
            messagesDiv.appendChild(newMessage);
        };

        function sendMessage() {
            const input = document.getElementById('messageInput');
            socket.send(input.value);
            input.value = '';
        }
    </script>
</body>
</html>
```

---

## Why Use WebSockets Instead of HTTP/REST?

| Feature                 | HTTP/REST                          | WebSockets                          |
|-------------------------|------------------------------------|-------------------------------------|
| **Connection Type**     | Stateless, request-response        | Persistent, bidirectional           |
| **Overhead**            | High (new handshake per request)   | Low (single handshake, persistent)  |
| **Efficiency**          | Polling or long-polling required   | Real-time data exchange             |
| **Use Case**            | API calls, less frequent updates   | Real-time updates, frequent data    |

---

## Scaling WebSocket Servers

### Challenges in Scaling:
- WebSockets are stateful and require sticky sessions to maintain connection consistency.

### Solutions:
1. **Horizontal Scaling**: Use load balancers like NGINX or AWS ALB with sticky sessions.
2. **Message Brokers**: Use systems like Redis, RabbitMQ, or Kafka for communication across servers.
3. **Stateless Design**: Offload client state to external services (Redis, DynamoDB).
4. **Managed Services**: Use cloud providers like AWS API Gateway WebSockets or Azure Web PubSub.
5. **Auto-Scaling**: Deploy servers in containers with orchestration tools like Kubernetes.

| Strategy                    | Tools/Services                   |
|-----------------------------|----------------------------------|
| Horizontal Scaling          | NGINX, HAProxy, AWS ALB          |
| Pub/Sub Pattern             | Redis, RabbitMQ, Kafka           |
| Stateless Design            | Redis, DynamoDB, Memcached       |
| Managed WebSocket Services  | AWS, Azure, Google Cloud         |
| Auto-Scaling                | Docker, Kubernetes               |

---

Now your TypeScript project is ready to use WebSockets! 🚀
