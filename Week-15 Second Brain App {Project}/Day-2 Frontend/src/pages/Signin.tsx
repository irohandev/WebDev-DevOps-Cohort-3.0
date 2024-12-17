import { useRef } from "react"; // Importing useRef for referencing DOM elements
import { Button } from "../components/Button"; // Importing Button component for the submit button
import { Input } from "../components/Input"; // Importing Input component for form fields
import { BACKEND_URL } from "../config"; // Importing the backend URL from config
import axios from "axios"; // Importing axios for making HTTP requests
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for routing

// Signin component to handle user login
export function Signin() {
    // References for the username and password input fields
    const usernameRef = useRef<HTMLInputElement>(); 
    const passwordRef = useRef<HTMLInputElement>();

    // useNavigate hook for navigating to different routes
    const navigate = useNavigate();

    // signin function to handle user authentication
    async function signin() {
        const username = usernameRef.current?.value; // Get the value from the username input field
        console.log(usernameRef.current); // Log the username reference for debugging (optional)
        const password = passwordRef.current?.value; // Get the value from the password input field

        // Send POST request to the backend API for signin
        const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
            username, // Send username as part of the request
            password  // Send password as part of the request
        });

        // Extract the JWT token from the response and store it in localStorage
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);

        // Redirect to the dashboard page after successful signin
        navigate("/dashboard");
    }

    // JSX to render the signin form
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                {/* Input for username */}
                <Input reference={usernameRef} placeholder="Username" />
                
                {/* Input for password */}
                <Input reference={passwordRef} placeholder="Password" />

                {/* Submit button */}
                <div className="flex justify-center pt-4">
                    <Button onClick={signin} loading={false} variant="primary" text="Signin" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}
