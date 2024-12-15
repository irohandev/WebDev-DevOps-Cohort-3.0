## Setting Up a TypeScript Project with Express

### Step-by-Step Instructions

1. **Initialize a Node.js Project**  
   Run the following command to create a `package.json` file:
   ```bash
   npm init -y
   ```
   The `-y` flag automatically generates a `package.json` file with default values.

2. **Install TypeScript as a Development Dependency**  
   ```bash
   npm install -D typescript
   ```
   Installs TypeScript locally as a dev dependency for the project.

3. **Initialize TypeScript Configuration**  
   ```bash
   npx tsc --init
   ```
   Creates a `tsconfig.json` file for configuring TypeScript settings.

4. **Update tsconfig.json**  
   Add or update the following configuration options:
   ```json
   "rootDir": "./src",
   "outDir": "./dist",
   ```
   - **rootDir**: Specifies the folder where your TypeScript source files will reside.
   - **outDir**: Defines the output folder for compiled JavaScript files.

5. **Install Express**  
   ```bash
   npm install express
   ```
   Installs Express as a dependency for building the server.

6. **Install TypeScript Types for Express**  
   ```bash
   npm install -D @types/express
   ```
   Installs TypeScript type definitions for Express, allowing for type safety and autocompletion in your code.

7. **Install JSON Web Token (jsonwebtoken)**  
   ```bash
   npm install jsonwebtoken
   ```
   - **jsonwebtoken**: A library used to create and verify JSON Web Tokens (JWTs), which are commonly used for authentication and secure data exchange.

8. **Install Mongoose**  
   ```bash
   npm install mongoose
   ```
   - **mongoose**: A library that provides a schema-based solution for modeling application data and interacting with MongoDB.

9. **Install TypeScript Types for Mongoose**  
   ```bash
   npm install -D @types/mongoose
   ```
   Installs TypeScript type definitions for Mongoose, allowing for type safety and autocompletion when working with MongoDB.

### Directory Structure
Ensure your project follows this structure:
```
project-folder/
├── src/
│   └── index.ts
├── dist/
├── package.json
├── tsconfig.json
```
- **src/**: Contains your TypeScript files.
- **dist/**: Contains the compiled JavaScript files.

### Final Notes
After completing these steps, you can start writing TypeScript code in the `src` folder and compile it using:
```bash
npx tsc
```
The compiled JavaScript files will be placed in the `dist` folder as per the `tsconfig.json` configuration.
