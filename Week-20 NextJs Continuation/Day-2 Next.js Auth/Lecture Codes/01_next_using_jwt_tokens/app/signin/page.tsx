import axios from "axios"; // Importing the Axios library for making HTTP requests

// Default export function representing the Sign-In page component
export default function () {
    return (
        <div>
            {/* Displaying the Sign-In page */}
            SIGN IN PAGE
            <br />

            {/* Input field for the username */}
            <input type="text" />

            {/* Input field for the password */}
            <input type="password" />

            {/* Button to handle sign-in */}
            <button
                onClick={async () => {
                    // Sending a POST request to the sign-in API with hardcoded credentials
                    const res = await axios.post("http://localhost:3000/api/signin", {
                        username: "abc",
                        password: "password"
                    });

                    // Storing the received token in the local storage
                    localStorage.setItem("token", res.data.token);
                }}
            >
                Sign In
            </button>
        </div>
    );
}

// Workflow Explanation:
// 1. This code defines a React functional component representing a simple Sign-In page.
// 2. The page includes input fields for entering the username and password, and a "Sign In" button.
// 3. When the "Sign In" button is clicked:
//    a. An asynchronous function is triggered.
//    b. This function sends a POST request to the API endpoint `http://localhost:3000/api/signin` using Axios.
//    c. The request payload contains hardcoded credentials: `username: "abc"` and `password: "password"`.
// 4. On receiving a successful response from the server, the returned JWT token is extracted from `res.data.token`.
// 5. The extracted token is then stored in the browser's local storage using `localStorage.setItem()`.
// 6. This token can be used for authenticating future requests to the server.
