import './App.css'
import { Sidebar } from './components/sidebar'

// Code for Dark and Light Mode
function App() {
  return (
    <div  className='h-screen bg-white dark:bg-black text-black dark:text-white'>
      <button
      onClick={() => {
        document.querySelector("html").classList.toggle("dark")
      }}>Toggle Theme</button>

      <Sidebar />
    </div>
  )
}

export default App
