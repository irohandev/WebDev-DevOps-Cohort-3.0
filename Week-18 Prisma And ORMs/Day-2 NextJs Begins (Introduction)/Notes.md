1. **What is NextJS?**
NextJS is a framework that was introduced because of some minor inconveniences in React.
   i. In a React project, you have to maintain a separate Backend project for your API Routes.
   ii. React does not provide out of the box routing.(You have to use react-router-dom).
   iii. React is not SEO Optimized
       a. Not exactly true today because of React Server Components.
   iv. Waterfall Problem

2. **What is SEO Optimization?**
Google/Bing has a bunch of crawlers that hit websites and figure out what the website does. It ranks it on Google based on the HTML it gets back. The crawlers do not usually run your JS and render your page to see the final output. Or SEO (Search Engine Optimization) is the process of improving a website's visibility on search engines like Google, Bing, and Yahoo. The goal is to increase organic (non-paid) traffic by ranking higher in search engine results pages (SERPs). Effective SEO makes it easier for users and search engines to understand your content.

   **How Search Engines Work?**
       1. Crawling: Bots scan your website for content.
       2. Indexing: Gathered data is stored in the search engine's database.
       3. Ranking: Algorithms evaluate your site based on hundreds of factors, like relevance, content, quality, and User experience.

3. **What is Waterfalling Problem?**
The waterfalling problem in React refers to a situation where multiple asynchronous operations (like API calls) are performed sequentially, one after the other, instead of concurrently, causing unnecessary delays. This happens when each operation depends on the completion of the previous one, even when such dependency is not needed. The term originates from the concept of a "waterfall" where one step flows into the next.

   **In React:**
   1. Fetching the index.html from the CDN.
   2. Fetching script.js from CDN.
   3. Checking if user is logged in (if not, redirect them to /login page).
   4. Fetching the actual blogs.

   There are 4 round trips that happen one after the other. The "Waterfalling Problem" in React, and more broadly in web development, refers to a scenario where data fetching operations are chained or dependent on each other in a way that leads to inefficient loading behavior.

4. **What is Next.js Upsides over React?**
   1. Server-Side Rendering - Next.js enables rendering of React components on the server before sending the HTML to the client, resulting in faster initial page loads and improved SEO.
   2. Static Site Generation - Developers can pre-render pages at build time, creating static HTML files that are served to users. This approach reduces server load and enhances performance.
   3. Built-in Routing: Next.js offers a file-based routing system, allowing developers to define routes based on the file structure within the pages directory, simplifying navigation setup.
   4. API Routes - Next.js allows the creation of API endpoints within the application, enabling the development of full-stack applications without the need for an external backend.
   5. TypeScript Support: Next.js has excellent TypeScript integration, allowing developers to utilize static typing for both client-side and server-side code, enhancing code quality and maintainability.
   6. File-based routing (No need for react-router-dom).
   7. Bundle Size optimizations, Static site generation.
   8. Maintained by the Vercel Team.


## 5. Initializing a Next.js Application

Follow these steps to set up a **Next.js** application using the command `npx create-next-app@latest`.

---

### Step 1: Open Your Terminal
- Open the terminal or command prompt on your computer.

---

### Step 2: Run the Command
```bash
npx create-next-app@latest
```
- **What It Does**: Downloads the latest version of the **Next.js** project generator and runs it without installing globally.

---

### Step 3: Enter Project Details
You'll be prompted with a series of questions:

1. **What is your project named?**  
   - Enter the name of your project (e.g., `my-next-app`).  
   - This will create a folder with the same name.

2. **Would you like to use TypeScript?**  
   - Type `Y` (Yes) or `N` (No).  
   - If you select `Yes`, the project will be set up with TypeScript.

3. **Would you like to use ESLint?**  
   - Type `Y` (Yes) or `N` (No).  
   - If you select `Yes`, ESLint will be configured for code linting.

4. **Would you like to use Tailwind CSS?**  
   - Type `Y` (Yes) or `N` (No).  
   - Selecting `Yes` sets up Tailwind CSS for styling.

5. **Would you like to use `src/` directory?**  
   - Type `Y` (Yes) or `N` (No).  
   - If `Yes`, your application files will be placed in a `src` directory for better organization.

6. **Would you like to use App Router?**  
   - Type `Y` (Yes) or `N` (No).  
   - If `Yes`, Next.js will use its newer App Router (introduced in version 13).

7. **Would you like to customize the default import alias?**  
   - Type `Y` (Yes) or `N` (No).  
   - If `Yes`, you can specify a custom alias for imports, such as `@components` for the `components` directory.

---

### Step 4: Navigate to the Project Folder
After the setup is complete, navigate to your project directory:
```bash
cd my-next-app
```

---

### Step 5: Install Dependencies (Optional)
If for some reason dependencies were not installed during setup, run:
```bash
npm install
```

---

### Step 6: Start the Development Server
Start the development server to preview your application:
```bash
npm run dev
```
- Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see your application running.

---

### Step 7: Explore Your Project
Once the application is initialized:
- Open the project in your favorite code editor (e.g., Visual Studio Code).
- You'll see the default Next.js file structure:
  ```
  my-next-app/
  ├── node_modules/
  ├── public/
  ├── styles/
  ├── pages/ (or src/pages/ if App Router is not used)
  ├── app/ (if App Router is used)
  ├── package.json
  ├── next.config.mjs (Next.js configuration file)
  ├── tailwind.config.js (Tailwind configuration file)
  ├── README.md
  ```

---

### Step 8: Bootstrap the Project
1. **Remove Everything from `app/page.tsx`**
   - Replace its content with:
     ```tsx
     export default function Page() {
       return <div></div>;
     }
     ```

2. **Remove CSS Bits from `global.css`**
   - Keep only the Tailwind headers and delete all other styles. Ensure the file includes:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

---

### Step 9: Begin Development
- Edit files inside the `app` or `pages` directory to start building your Next.js application.
---

## 6. What is Layout.tsx?

In a Next.js project using the app directory, a `layout.tsx` (or `layout.jsx`) file defines the layout for a specific route or the entire application. Layouts allow you to create reusable structures, such as navigation bars, footers, or sidebars, that persist across pages in a given route or nested routes.

### Key Features of `layout.tsx`

1. **Reusable Structure Across Pages**  
   A `layout.tsx` file is used to define components or structure (like headers or sidebars) that should appear on multiple pages.

2. **File Location**  
   The `layout.tsx` file should be placed in a route folder inside the `app` directory.  
   Example structure:

               app/
                   ├── layout.tsx         // Root layout
                   ├── page.tsx           // Home page
                   └── auth/
                       ├── layout.tsx     // Auth-specific layout
                       ├── signin/
                       │   └── page.tsx   // Sign-in page
                       └── signup/
                           └── page.tsx   // Sign-up page

3. **Children Prop**  
The layout component wraps the child pages. Next.js automatically injects the `children` prop, representing the content of the nested route or page.

4. **Persistent Components**  
Components defined in a `layout.tsx` persist while navigating between child pages, reducing unnecessary re-renders.
