"use client" // This directive indicates that this file is client-side code, meaning it will run in the browser.
import axios from "axios"; // Importing Axios for making HTTP requests
import { useEffect, useState } from "react"; // Importing React hooks for managing component state and lifecycle

// This is an example of how to handle profile fetching in a React environment. However, this approach is not suitable for SSR in Next.js.

/* Why this approach is discouraged in Next.js:
1. **Server-Side Rendering (SSR):**
   - Next.js primarily focuses on SSR, where the initial request is processed on the server, rendering the page before sending it to the client.
   - Using localStorage to fetch tokens on the client breaks the SSR model since localStorage is only accessible in the browser.
   
2. **Network Request Timing:**
   - In this method, the first network request (to fetch the profile avatar) will fail because it lacks the required token in headers.
   - This issue arises because the localStorage value is retrieved only after the component mounts in the browser.

3. **LocalStorage and SSR:**
   - Next.js doesn't support localStorage in SSR because localStorage is a client-only feature.
   - Using localStorage to pass tokens results in a request where the server cannot identify the user during the initial page load.

4. **Security Concern:**
   - Sending tokens via localStorage and manually attaching them to headers is less secure compared to Next.js's built-in mechanisms like `next-auth`.

Recommendation:
- Use `next-auth` or other authentication libraries designed for Next.js to handle token storage securely.


export default function Profile() {
    const [profilePicture, setProfilePicture] = useState(""); // State to store the user's profile picture URL

    useEffect(() => {
        // Fetching profile data from the backend
        axios.get("http://localhost:3000/api/profile", {
            headers: {
                // Attach the token stored in localStorage to the authorization header
                authorization: localStorage.getItem("token")
            }
        }).then(res => {
            // Set the profile picture URL retrieved from the API response
            setProfilePicture(res.data.avatarUrl);
        });
    }, []); // Run this effect only once after the component mounts

    return (
        <div>
            {profilePicture}
        </div>
    );
}
*/


// Here's the correct approach in Next.js using SSR:
export default async function Profile() {
    // Attempt to fetch profile data using axios
    const res = await axios.get("http://localhost:3000/api/profile", {
        headers: {
            // Using localStorage here is problematic because it's unavailable in SSR
            authorization: localStorage.getItem("token")
        }
    });

    /* In SSR, using localStorage will result in an error:
    - Next.js doesn't support localStorage in the server environment.
    - The server-side process cannot access localStorage, leading to failed requests.
    */

    // Placeholder value simulating a profile picture URL (not recommended)
    const profilePicture = res.data.avatarUrl;

    return (
        <div>
            {profilePicture} {/* Render the profile picture */}
        </div>
    );
}

// Final Note:
// Instead of using localStorage, consider implementing proper authentication methods with `next-auth` or session cookies.
// Refer to the `02_nextjs_using_auth` example files to learn how to implement these best practices for Next.js authentication.
