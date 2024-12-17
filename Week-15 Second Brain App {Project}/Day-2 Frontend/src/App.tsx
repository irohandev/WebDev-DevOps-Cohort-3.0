import { Signin } from "./pages/Signin"; // Importing the Signin page component
import { Signup } from "./pages/Signup"; // Importing the Signup page component
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing Router components from react-router-dom for routing
import { Dashboard } from "./pages/dashboard"; // Importing the Dashboard page component

// App component to define the routing structure of the application
function App() {
  return (
    <BrowserRouter>
      {/* BrowserRouter is the main wrapper for routing in React */}
      <Routes>
        {/* Defining the routes for each page of the application */}
        <Route path="/signup" element={<Signup />} /> {/* Route for signup page */}
        <Route path="/signin" element={<Signin />} /> {/* Route for signin page */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Route for dashboard page */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Exporting the App component as the default export
