// Import useState hook from React for managing state
import { useState } from "react";

function App() {
    // Define the state 'todos' and its setter 'setTodos', initializing with one todo item
    const [todos, setTodos] = useState([
        {   // Default todo item
            title: "Go to gym", // Title of the todo item
            description: "Hit the gym regularly", // Description of the todo item
        },
    ]);

    // Function to add a new todo item
    function addTodo() {
        // Update the 'todos' state using the spread operator to add a new todo item
        setTodos([
            ...todos, // Spread the existing todos array
            {
                title: document.getElementById("title").value, // Get the title input from the DOM
                description: document.getElementById("description").value, // Get the description input from the DOM
            },
        ]);
    }

    // Return the JSX to render the component
    return (
        <div>
            <h1>Todo App</h1> {/* Header for the app */}

            {/* Input field for the todo title */}
            <input id="title" type="text" placeholder="Add Todo Title" /> 

            {/* Input field for the todo description */}
            <input id="description" type="text" placeholder="Add Todo Description" /> 

            {/* Button to trigger the addTodo function */}
            <button onClick={addTodo}>Add Todo</button> 

            <br />

            {/* Map through the todos array and render each todo item using the Todo component */}
            {
              todos.map((todo, index) => (
                <Todo 
                  key={index} // Unique key for each todo component
                  title={todo.title} // Pass the title prop to the Todo component
                  description={todo.description} // Pass the description prop to the Todo component
                />
            ))}
        </div>
    );
}

// Functional component to display each todo item
function Todo(props) {
    return (
        <div>
            <h3>{props.title}</h3> {/* Display the title of the todo */}
            <p>{props.description}</p> {/* Display the description of the todo */}
        </div>
    );
}

// Export the App component as default
export default App;
