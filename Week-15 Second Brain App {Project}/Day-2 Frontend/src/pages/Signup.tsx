import { useRef } from "react"; // Importing useRef to create references for the input fields
import { Button } from "../components/Button"; // Importing Button component for the submit button
import { Input } from "../components/Input"; // Importing Input component for form fields
import axios from "axios"; // Importing axios for making HTTP requests
import { BACKEND_URL } from "../config"; // Importing the backend URL from config
import { useNavigate } from "react-router-dom"; // Importing useNavigate hook for routing

// Signup component to handle user registration
export function Signup() {
    // References for the username and password input fields
    const usernameRef = useRef<HTMLInputElement>(); 
    const passwordRef = useRef<HTMLInputElement>();

    // useNavigate hook for navigating to different routes
    const navigate = useNavigate();

    // signup function to handle user registration
    async function signup() {
        const username = usernameRef.current?.value; // Get the value from the username input field
        console.log(usernameRef.current); // Log the username reference for debugging (optional)
        const password = passwordRef.current?.value; // Get the value from the password input field

        // Send POST request to the backend API for signup
        await axios.post(BACKEND_URL + "/api/v1/signup", {
            username, // Send username as part of the request
            password  // Send password as part of the request
        });

        // Navigate to the signin page after successful signup
        navigate("/signin");

        // Display an alert message to inform the user that the signup was successful
        alert("You have signed up!");
    }

    // JSX to render the signup form
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white rounded-xl border min-w-48 p-8">
                {/* Input for username */}
                <Input reference={usernameRef} placeholder="Username" />
                
                {/* Input for password */}
                <Input reference={passwordRef} placeholder="Password" />

                {/* Submit button */}
                <div className="flex justify-center pt-4">
                    <Button onClick={signup} loading={false} variant="primary" text="Signup" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}
