import { RecoilRoot, useRecoilState } from "recoil";
import { todosAtomFamily } from './store/atom';
import './App.css'

function App() {
  return (
    <RecoilRoot>
      {/* Rendering Todo components with different IDs (1 and 2) */}
      <Todo id={1}/>  
      <Todo id={2}/>
    </RecoilRoot>
  );
}


// 'id' is passed as a prop, like how 1 is passed above, so it will give the output for the todo with ID 1
function Todo({id}){   

  // 'todosAtomFamily' fetches the todo data based on the 'id' from the state   
  const [todo, setTodo] = useRecoilState(todosAtomFamily(id));  
   
  return (
    <>
      {/* Displaying the title of the todo */}
      {todo.title} 
      {/* Displaying the description of the todo */}
      {todo.description}
      <br/>
    </>
  );
}

export default App;
