// Enables the component to use client-side rendering in a Next.js application
"use client";

import axios from "axios"; // Importing axios for making HTTP requests

// Defining the Signin component
export default function Signin() {
    return (
        // Outer container to center the sign-in form on the screen
        <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
            {/* Card container for the sign-in form */}
            <div className="bg-white shadow-md rounded-lg p-6 w-80">
                {/* Sign-in header */}
                <h1 className="text-2xl font-semibold text-center mb-4">Sign In</h1>
                
                {/* Form elements container with gap between items */}
                <div className="flex flex-col gap-4">
                    {/* Input field for entering the username */}
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Input field for entering the password */}
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* Submit button to send the sign-in request */}
                    <button
                        onClick={() => {
                            // Sending a POST request to the backend API for sign-in
                            axios.post("http://localhost:3000/api/v1/signin");
                        }}
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
}
