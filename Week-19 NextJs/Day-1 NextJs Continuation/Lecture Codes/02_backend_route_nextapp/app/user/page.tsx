import axios from "axios"; // Importing the Axios library for making HTTP requests

// Function to fetch user data from an API endpoint
async function getUserData() {
    // Fetching data from the server through the backend route we have created
    const response = await axios.get(
        "https://localhost:3000/api/v1/user/details"
    );

    // Adding a delay of 5 seconds to simulate a loader effect
    // This is useful for displaying a loading spinner on the page
    await new Promise((resolve) => setTimeout(resolve, 5000));

    // Returning the API response data
    return response.data;
}

// The main functional component that renders the page
export default async function Home() {
    // Fetching the user data by calling the `getUserData` function
    const userData = await getUserData();

    // JSX to render the user data in a styled container
    return (
        <div className="flex flex-col justify-center h-screen"> {/* Centers content vertically */}
            <div className="flex justify-center"> {/* Centers content horizontally */}
                <div className="border p-8 rounded"> {/* Adds border, padding, and rounded corners */}
                    {/* Displays user name or a fallback message if data is unavailable */}
                    <div>Name: {userData?.name || "No name available"}</div>
                    {/* Displays user email or a fallback message if data is unavailable */}
                    <div>Email: {userData?.email || "No email available"}</div>
                </div>
            </div>
        </div>
    );
}

/*
Notes:
In the previous code, we fetched details from a hosted backend. 
However, in this code, we are explicitly specifying the backend route (defined in the `api/v1/user/route.ts` file).
The data fetched from this route will display the user's name and email.
*/
