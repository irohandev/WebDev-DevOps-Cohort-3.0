Notes:

Custom Hooks in React:
    - Custom hooks in React allow you to reuse stateful logic across multiple components. These are JavaScript functions that start with the prefix use and leverage React hooks (like useState, useEffect, etc.) to encapsulate reusable logic. Custom hooks enhance code reusability, readability, and maintainability.

    - Why Use Custom Hooks?
        1. Code Reusability: Encapsulate logic that can be shared across components.
        2. Separation of Concerns: Helps in organizing code by separating logic from UI components.
        3. Cleaner Components: Reduces clutter in components by moving complex logic into custom hooks.
        4. Improved Testing: Makes testing easier by isolating logic in a custom hook.

    - Guidelines for Custom Hooks
        1. Naming Convention: Always start with use (e.g., useAuth, useTheme).
        2. Encapsulate Logic: Focus on logic, not UI (return values or functions, not JSX).
        3. Dependency Management: Pass dependencies as arguments and handle them in useEffect or other hooks.
        4. Avoid Side Effects: Keep side effects predictable and encapsulated.

    - Common Use Cases for Custom Hooks
        i. Data Fetching: Encapsulate API call logic.
        ii. Form Handling: Manage form states and validations.
        iii. Authentication: Handle user authentication and token management.
        iv. Debouncing/Throttling: Manage input delay or rate-limit executions.
        v. Window Resize: Detect and handle window size changes.
        vi. Local Storage Management: Read/write data to/from localStorage or sessionStorage.


    - Best Practices
        - Keep them Generic: Make hooks reusable for multiple use cases.
        - Minimize Dependencies: Pass only required dependencies to hooks.
        - Test Thoroughly: Test hooks independently to ensure reliability.
        - Avoid Overuse: Use custom hooks only when logic needs to be reused or separated.