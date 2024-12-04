# Course Selling App

A Node.js based app to manage course selling operations with both user and admin functionalities. This app integrates features like user authentication, course management, and purchasing, with a focus on modular and scalable architecture.

## Features
- **User Routes:**
  - Login
  - Signup
  - Purchase a course
  - View all available courses
  - View purchased courses
- **Admin Routes:**
  - Login
  - Signup
  - Create a course
  - Delete a course
  - Add course content

## Steps to Build

### 1. Initialize a Node.js Project
Set up a new Node.js project by running the following command:
`npm init`

### 2. Install Dependencies
Install the required dependencies for the project:
`npm install express jsonwebtoken mongoose dotenv`

### 3. Create `index.js`
Create an entry file `index.js` for initializing your Express app and connecting it to the database.

### 4. Set Up Routes
Define your route skeletons:

#### **User Routes:**
- **Login**
- **Signup**
- **Purchase a course**
- **View all courses**
- **View purchased courses**

#### **Admin Routes:**
- **Login**
- **Signup**
- **Create a course**
- **Delete a course**
- **Add course content**

### 5. Define Schemas
Create MongoDB schemas for the following models:
- **User**
- **Admin**
- **Course**
- **Purchase**

### 6. Database Configuration
- Use **MongoDB** for the database.
- Use the `dotenv` package to securely store your database connection string.
`npm install dotenv`

- Create a `.env` file to store the connection string:
    `MONGODB_URI=your_mongodb_connection_string`


### 7. Add Authentication Middlewares
- Create middlewares for **User** and **Admin** authentication using JWT.
- Protect routes by ensuring valid tokens are provided.

### 8. Complete the Routes
Implement the following routes:
- **User Routes:**
  - Login
  - Signup
  - Purchase a course
  - View all courses
- **Admin Routes:**
  - Login
  - Signup

### Extra Point :  What is `process.env`?
In Node.js, `process.env` is used to access environment variables. These variables are stored in the `.env` file and can be accessed via the `process.env` object in the code. It helps store sensitive information, like database connection strings or API keys, securely. 

### Example:
```javascript
// Include process module
const process = require('process');

// Accessing the environment variables
console.log(process.env.MONGODB_URI);  // Logs the MongoDB connection string

