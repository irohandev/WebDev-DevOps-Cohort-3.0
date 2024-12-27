// Enables the component to use client-side rendering in a Next.js application
"use client";

import axios from "axios"; // Importing axios for making HTTP requests
import { useState } from "react"; // Importing useState for managing component state
import { useRouter } from "next/navigation"; // Importing useRouter for navigation after sign-up

// Defining the Signup component
export default function Signup() {
    // Setting up state for storing username and password values
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 

    // Getting access to the Next.js router for redirection after successful signup
    const router = useRouter();

    return (
        // Outer container to center the sign-up form on the screen
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
            {/* Card container for the sign-up form */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                {/* Sign-up header */}
                <h1 className="text-2xl font-semibold text-center mb-4">Sign Up</h1>
                
                {/* Form elements container with gap between items */}
                <div className="flex flex-col gap-4">
                    {/* Input field for entering the username */}
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)} // Updating username state on input change
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    
                    {/* Input field for entering the password */}
                    <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} // Updating password state on input change
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit button to send the sign-up request */}
                    <button
                        onClick={() => {
                            // Sending a POST request to the backend API for sign-up with username and password
                            axios
                                .post("http://localhost:3000/api/v1/signup", {
                                    username, // Passing the username from state
                                    password, // Passing the password from state
                                })
                                .then(() => router.push("/signin")); // Redirecting to the sign-in page after successful signup
                        }}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}
