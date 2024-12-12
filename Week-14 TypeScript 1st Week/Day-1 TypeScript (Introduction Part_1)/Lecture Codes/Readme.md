# TypeScript Setup on Local System

## **1. Prerequisites**
- Install **Node.js**: TypeScript requires Node.js for its package manager (npm).
  - Download and install Node.js from [Node.js official website](https://nodejs.org/).
  - Verify installation:
    ```bash
    node -v
    npm -v
    ```

---

## **2. Install TypeScript**
1. Open a terminal or command prompt.
2. Install TypeScript globally using npm:
    ```bash
    npm install -g typescript
    ```
3. Verify the installation:
    ```bash
    tsc -v
    ```

---

## **3. Create a TypeScript Project**
1. Create a new directory for your project:
    ```bash
    mkdir my-typescript-project
    cd my-typescript-project
    ```
2. Initialize a `package.json` file:
    ```bash
    npm init -y
    ```
3. Install TypeScript as a local dependency:
    ```bash
    npm install --save-dev typescript
    ```

---

## **4. Configure TypeScript**
1. Generate a `tsconfig.json` file:
    ```bash
    npx tsc --init
    ```
2. Edit the `tsconfig.json` file to configure TypeScript options. Example configuration:
    ```json
    {
      "compilerOptions": {
        "target": "ES6",
        "module": "commonjs",
        "outDir": "./dist",
        "rootDir": "./src",
        "strict": true
      },
      "include": ["src"],
      "exclude": ["node_modules"]
    }
    ```

---

## **5. Write TypeScript Code**
1. Create a `src` directory:
    ```bash
    mkdir src
    ```
2. Inside `src`, create a `index.ts` file:
    ```ts
    const greet = (name: string): string => {
        return `Hello, ${name}!`;
    };

    console.log(greet("World"));
    ```

---

## **6. Compile TypeScript to JavaScript**
1. Compile the `.ts` files into `.js`:
    ```bash
    npx tsc
    ```
2. The compiled JavaScript files will appear in the `dist` directory.

---

## **7. Run the Compiled Code**
1. Use Node.js to run the JavaScript file:
    ```bash
    node dist/index.js
    ```

---

## **8. Set Up a Development Workflow**
To improve your workflow:
- Use a bundler like **Webpack** or **Parcel** for larger projects.
- Install **ts-node** for running TypeScript directly without compilation:
    ```bash
    npm install -g ts-node
    ```
    Run your `.ts` files directly:
    ```bash
    ts-node src/index.ts
    ```

---

## **9. Editor Support**
Use **Visual Studio Code** for the best experience:
- Install the [TypeScript extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next).
- Enable IntelliSense and debugging features.

---

## **10. Optional: Setup Linter**
Install **ESLint** for code linting:
```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```
Configure ESLint to work with TypeScript.

---

You're now ready to develop with TypeScript on your local system! 🚀
