// Import necessary modules
import './App.css'; // Import CSS for styling
import { RecoilRoot, useRecoilValueLoadable } from 'recoil'; // Import Recoil hooks for state management
import { todosAtomFamily } from './store/atom'; // Import the atom family for fetching todo data

// Define the App component which serves as the root of the application
function App() {
  return (
    // Wrap the application with RecoilRoot to enable Recoil state management across the app
    <RecoilRoot>
      {/* Render Todo components for each todo item with a unique ID */}
      <Todo id={1} />
      <Todo id={2} />
      <Todo id={3} />
      <Todo id={5} /> {/* Testing fallback case with ID 5 */}
    </RecoilRoot>
  );
}

// Define the Todo component, which fetches and displays a todo item by ID
function Todo({id}) {
  // Use Recoil's useRecoilValueLoadable hook to get the state of the todo atom
  const todo = useRecoilValueLoadable(todosAtomFamily(id));
  
  // Check the state of the todo atom and handle different loading states
  if (todo.state === 'loading') {
    // If the state is loading, display a loading message
    return <div>Loading...</div>;
  } else if (todo.state === 'hasValue') {
    // If the state is 'hasValue', display the fetched todo's title and description
    return (
      <div>
        {/* Display the title and description of the todo */}
        {todo.contents.title}
        {todo.contents.description}
      </div>
    );
  }

  // Optionally, you could handle the 'hasError' state if needed (currently not implemented)
}

// Export the App component as the default export for use in index.js
export default App;