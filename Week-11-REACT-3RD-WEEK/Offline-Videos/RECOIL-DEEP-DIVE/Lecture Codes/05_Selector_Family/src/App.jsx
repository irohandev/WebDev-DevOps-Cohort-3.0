import './App.css'; // Import the CSS file for styling
import { RecoilRoot, useRecoilState } from 'recoil'; // Import RecoilRoot and useRecoilState from Recoil for state management
import { todosAtomFamily } from './store/atom'; // Import the todosAtomFamily to manage individual todo states

// App component that wraps the app in RecoilRoot to provide the state context
function App() {
  return (
    <RecoilRoot> {/* RecoilRoot provides context for Recoil state */}
      {/* Rendering Todo components with different IDs to fetch and display their data */}
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}

// Todo component that takes an ID as a prop and retrieves the corresponding todo
function Todo({id}) {
  // useRecoilState hook is used to get and set the state of the todo with the given ID
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

  return (
    <div>
      {/* Display the title and description of the todo */}
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
    </div>
  );
}

export default App; // Export the App component as the default export