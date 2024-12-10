import './App.css'
import {BrowserRouter ,  Routes, Route, Link, useNavigate} from "react-router-dom"


function App() {

  return (
  <div>    

    {/* Navigation Links & Yaha kuch bhi likhnge toh har page pe render hoga..kyuki yeh div k andar hai na ki BrowserRoute ke andar */}

    {/* <a href = "/">Landing</a> ------- isse hmesa page reload hoga aur uske HTML ko re-fetch krega 
    |
    <a href = "/neet/online-coahing-class-11">CLASS 11</a>
    |
    <a href = "/neet/online-coahing-class-12">CLASS 12</a> */}


      {/* Routing Configuration */}
      <BrowserRouter>
        

        {/* If we use this link outside this block it will throw an error */}
        <Link to = "/">Landing</Link>           
        |
        <Link to = "/neet/online-coahing-class-11">CLASS 11</Link>
        |
        <Link to = "/neet/online-coahing-class-12">CLASS 12</Link>

        <Routes>
          <Route path="/neet/online-coahing-class-11" element={<Class11Program/>} />       //yeh routes se bta rha hai ki kaunse routes pe kaunsa compoenent render ho rh hai 
          <Route path="/neet/online-coahing-class-12" element={<Class12Program/>} />
          <Route path="/" element={<Landing/>} />
          <Route path="*" element={<ErrorPage />} /> {/* Route for handling unmatched paths, rendering a 404 error page */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Function component to display a 404 error message if no route matches
function ErrorPage() {
    // Return the JSX for the component
    return (
        <div>
            {/* Display a message indicating the page was not found */}
            <h1>Sorry page not found - ERROR 404 :( </h1>
        </div>
    );
}

// Function component to display the landing page
function Landing() {
  // Return the JSX for the component
  return (
      <div>
          {/* Display the main title of the landing page */}
          <h1>Welcome to Allen</h1>
      </div>
  );
}

// Function component to display information about the NEET program for Class 11
function Class11Program() {
  // Return the JSX for the component
  return (
      <div>
          {/* Display the heading for the Class 11 program */}
          <h2>Neet Programs for Class 11th</h2>
      </div>
  );
}

// Function component to display information about the NEET program for Class 12
function Class12Program() {
// useNavigate hook allows programmatic navigation within the component
const navigate = useNavigate();

  // Function to redirect the user to the landing page when the button is clicked
  function redirectUser() {
      navigate("/"); // Navigate to the landing page ("/" path)
  }

  // Return the JSX for the component
  return (
      <div>
          {/* Display the heading for the Class 12 program */}
          <h2>Neet Programs for Class 12th</h2>

          {/* Button that triggers the redirect function to navigate back to the landing page */}
          <button onClick={redirectUser}>Back to Landing Page</button>
      </div>
  );
}

// Export the App component to be used in other parts of the application
export default App;


// Notes: 
//   - a tag jab use krenge na toh page har click pe dubara reload hoga ..so isko avoid krne k liye we will use LINK 
//   - aur LINK ko Browser Router k andar likhnge woh jisse woh page ko bar baar reload ya uske html part ko refetch nhi krega 
