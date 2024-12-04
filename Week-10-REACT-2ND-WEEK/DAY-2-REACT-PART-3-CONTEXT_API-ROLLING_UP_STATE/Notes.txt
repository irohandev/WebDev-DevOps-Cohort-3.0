Notes:

1. Rolling up the state, unoptimal re-renders:
    - As your application grows, you might find that multiple components need access to the same state. Instead of duplicating state in each component, you can lift the state up to the LCA, allowing the common ancestor to manage it.

2. Prop Drilling
    - Prop drilling happens when data needs to be passed from a higher-level component to a lower-level component that is deeply nested in the component hierarchy. 
    - This can lead to the following issues:
        - Complexity: Props may need to go through several intermediate components that don’t actually use the data, just to reach the target component.
        - Maintenance: Managing changes becomes harder because updates to the props structure require changes in multiple components.

3. Context API:
    - The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.
    - The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.

    - Jargon :
        - Context: Created using React.createContext(). It serves as a container for the data you want to share.
        - Provider: A component that wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
        - Consumer: A component that subscribes to context changes. It allows you to access the context value, often using the useContext hook.

4. 