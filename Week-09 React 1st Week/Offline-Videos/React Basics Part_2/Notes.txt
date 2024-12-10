Notes: Continued -->

8. Children :
    - In React, children refer to the elements or components that are passed into a component as props. This feature allows you to create more flexible and reusable components by allowing them to wrap other components or elements. Understanding how to use children is key to leveraging the full power of React's component model.

9. Lists & Keys: 
    - In React, lists and keys are essential concepts that allow you to efficiently render collections of elements. When displaying multiple items, React needs a way to track each item to optimize rendering and updates. Here's an overview of how to work with lists and keys in React.

10. Inline styling in react:
    - Inline styling in React allows you to apply CSS styles directly to elements within your components using JavaScript objects. This approach provides a dynamic way to style components based on their state or props. Here’s a comprehensive guide to using inline styles in React.

    - Limitations of Inline Styling:
        i. No Pseudo-classes: Inline styles do not support CSS pseudo-classes (like :hover, :focus, etc.).
        ii. No Media Queries: Inline styles cannot respond to media queries.
        iii. Limited Performance Optimization: Repeatedly creating style objects can lead to unnecessary re-renders, though this is usually minimal.

    - Best Practices:
        i. Use for Simple Styles: Inline styling is best for simple, dynamic styles that are specific to a single component.
        ii. Avoid Complex Styles: For complex styles, consider using CSS modules, styled-components, or external stylesheets for better maintainability and readability.
        iii. Combine with Other Approaches: You can mix inline styles with other CSS strategies to leverage the strengths of each approach.

11. Class based vs functional components: {MOST POPULAR REACT INTERVIEW QUESTION}
    i. Class-Based Components - 
        - Definition: Class-based components are ES6 classes that extend the React.Component class. They provide a way to create components with their own state and lifecycle methods.

        - Key Features :
            i. State Management: Class components maintain their own local state.
            ii. Lifecycle Methods: They have built-in lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount that allow you to perform actions at specific points in a component's lifecycle.
            iii. This Keyword: Class components rely on the this keyword to access props, state, and methods.
        
        - Example:
            import React, { Component } from 'react';

            class ClassCounter extends Component {
                state = { count: 0 };

                increment = () => {
                    this.setState({ count: this.state.count + 1 });
                };

                render() {
                    return (
                        <div>
                            <p>Count: {this.state.count}</p>
                            <button onClick={this.increment}>Increment</button>
                        </div>
                    );
                }
            }

            
    ii. Functional Components
        - Definition: Functional components are simpler JavaScript functions that return JSX. They can use React hooks for state management and side effects.

        - Key Features:
            i. Stateless by Default: Initially, functional components were stateless. However, with the introduction of hooks in React 16.8, they can now manage state and side effects.
            ii. Hooks: Functional components can use hooks like useState, useEffect, and custom hooks to manage state and lifecycle events.
            iii. No this Keyword: There is no need to use the this keyword in functional components, making them easier to read and understand.  

        - Example:
            import React, { useState } from 'react';

            const FunctionalCounter = () => {
                const [count, setCount] = useState(0);
                
                function increment() {
                    setCount(count => count + 1)
                }

                return (
                    <div>
                        <p>Count: {count}</p>
                        <button onClick={increment}>Increment</button>
                    </div>
                );
            };

12. Lifecycle events:

    - In React, lifecycle events (or lifecycle methods) refer to the specific points in a component's life where you can execute code in response to changes or actions. These events help you manage tasks such as data fetching, subscriptions, and cleaning up resources.

    - Class-Based Lifecycle Methods:
        - In class components, lifecycle methods are divided into three main phases:
            i. Mounting: When the component is being inserted into the DOM.
                - constructor(): Called when the component is initialized.
                - componentDidMount(): Called immediately after the component is mounted. Ideal for data fetching.
            ii. Updating: When the component is being re-rendered due to changes in props or state.
                - componentDidUpdate(prevProps, prevState): Called after the component has updated. Good for operations based on prop/state changes.
            iii. Unmounting: When the component is being removed from the DOM.
                - componentWillUnmount(): Ideal for cleanup tasks, like invalidating timers or canceling network requests.

13. Error boundary:
    - Error boundaries are React components that catch JavaScript errors in their child component tree and display a fallback UI.
    - Error boundaries only exist in class based components.

14. Fragment:
    - In React, a component can return a single parent element, but it can contain multiple children within that single parent

    - Wrong code:
            const MyComponent = () => {
                return (
                    <h1>Hello</h1>
                    <p>World</p> // This line will cause an error
                );
            };
        ​
    - Right code:
        const MyComponent = () => {
            return (
                <>
                    <h1>Hello</h1>
                    <p>World</p>
                </>
            );
        };

15. Single page applications, routing:
    - Single Page Applications (SPAs) are a type of web application that loads a single HTML page and dynamically updates the content without requiring a full page reload. This approach provides a smoother user experience and is commonly used in modern web development.

    - Routing in Single Page Applications: Routing in SPAs is crucial for managing navigation between different views or components. Unlike traditional multi-page applications that rely on server-side routing, SPAs use client-side routing to manage navigation.

    - React Router: In React applications, React Router is the most commonly used library for handling routing. It allows you to define multiple routes in your application and render components based on the current URL.

    - Basic Setup of React Router :
        - Install React Router: To get started, you need to install the react-router-dom package. Code- npm install react-router-dom
        - Set Up Routes.

    - Benefits of SPAs and Routing
        i. Performance: SPAs reduce load times as they don’t require full-page reloads. Once the initial HTML, CSS, and JavaScript are loaded, subsequent interactions are faster.
        ii. User Experience: SPAs provide a seamless experience, akin to desktop applications, with minimal disruptions.
        iii. Easier to Build: By using client-side routing, developers can manage views and navigation more easily without relying on server-side rendering for every request.

16. Layouts:
    - In React, layouts are an important aspect of application design that help define the overall structure and organization of your user interface. 
    - They provide a way to manage how different components are arranged and displayed on the page.

17. useRef Hook:
    - What is useRef?
        - In React, useRef is a hook that provides a way to create a reference to a value or a DOM element that persists across renders but does not trigger a re-render when the value changes.

    - Key Characteristics of useRef:
        1. Persistent Across Renders: The value stored in useRef persists between component re-renders. This means the value of a ref does not get reset when the component re-renders, unlike regular variables.
        2. No Re-Renders on Change: Changing the value of a ref (ref.current) does not cause a component to re-render. This is different from state (useState), which triggers a re-render when updated.

18. Custom Hooks: 
    - Custom hooks in React are a powerful feature that allows you to encapsulate and reuse stateful logic across different components. They are essentially JavaScript functions that can use React hooks internally. By creating custom hooks, you can abstract away complex logic, making your components cleaner and more manageable.

    - Why Use Custom Hooks?
        1. Reusability: If you find yourself using the same logic in multiple components, a custom hook can help you avoid code duplication.
        2. Separation of Concerns: They allow you to separate business logic from UI logic, making your components more focused and easier to understand.

    - Common custom hooks: 
        i. usefetch
        ii. useFetch with re-fetching
        iii. usePrev
        iv. uselsOnline
        v. useDebounce

        Example - uselsOnline:
            import { useEffect, useState } from 'react';

            const useIsOnline = () => {
                const [isOnline, setIsOnline] = useState(navigator.onLine);

                useEffect(() => {
                    const updateOnlineStatus = () => setIsOnline(navigator.onLine);

                    window.addEventListener('online', updateOnlineStatus);
                    window.addEventListener('offline', updateOnlineStatus);

                    // Clean up the event listeners on component unmount
                    return () => {
                    window.removeEventListener('online', updateOnlineStatus);
                    window.removeEventListener('offline', updateOnlineStatus);
                    };
                }, []);

                return isOnline;
            };

            export default useIsOnline;

19. Rolling up the state, unoptimal re-renders:
    i. Rolling up the State
        - Rolling up the state means lifting shared state to the closest common ancestor component, ensuring data flows from parent to child via props. This improves consistency but can increase complexity when managing deeply nested components.

    ii. Unoptimal Re-renders
        - Unoptimal re-renders occur when components unnecessarily re-render, often due to unchanged props or state. This impacts performance. Solutions include using React.memo, useMemo, useCallback, and ensuring proper key usage in lists.

20. Prop drilling:
    - Prop drilling occurs when you need to pass data from a higher-level component down to a lower-level component that is several layers deep in the component tree. This often leads to the following issues:
        - Complexity: You may have to pass props through many intermediate components that don’t use the props themselves, just to get them to the component that needs them.
        - Maintenance: It can make the code harder to maintain, as changes in the props structure require updates in multiple components.

21. Context API:
    - The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

    - The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level. 

    - Jargon:
        - Context: This is created using React.createContext(). It serves as a container for the data you want to share.
        - Provider: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
        - Consumer: This component subscribes to context changes. It allows you to access the context value (using useContext  hook)
    
    - What context does, and what it doesn’t
        - The Context API primarily addresses the issue of prop drilling by allowing you to share state across your component tree without needing to pass props through every level.

        - It doesn’t optimise renders in your application, which becomes important if/when your application becomes bigger.

23. Introducing recoil:
    - To minimise the number of re-renders, and ensure that only components that are subscribed to a value render, state management was introduced.

    - There are many libraries that let you do state management - 
        1. mobx
        2. recoil
        3. redux

    - Here is a simple example with recoil. Code - npm install recoil

    