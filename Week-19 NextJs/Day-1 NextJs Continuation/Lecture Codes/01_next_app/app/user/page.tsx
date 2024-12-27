import axios from "axios"; // Importing Axios library for making HTTP requests

// Function to fetch user data from an API endpoint
async function getUserData() {
    // Sending a GET request to the API to fetch user details
    const response = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );

    // Adding a delay of 5 seconds to simulate a loader effect
    // Useful when we want to display a loading spinner on the page
    await new Promise((r) => setTimeout(r, 5000));

    // Returning the API response data
    return response.data;
}

// The main functional component that renders the page
export default async function Home() {
    // Fetching the user data by calling the `getUserData` function
    const userData = await getUserData();

    // JSX to render the user data in a styled container
    return (
        <div className="flex flex-col justify-center h-screen"> {/* Centering the content vertically */}
            <div className="flex justify-center"> {/* Centering the content horizontally */}
                <div className="border p-8 rounded"> {/* Adding border, padding, and rounded corners */}
                    {/* Displaying user name, or a fallback message if data is unavailable */}
                    <div>Name: {userData?.name || "No name available"}</div>
                    {/* Displaying user email, or a fallback message if data is unavailable */}
                    <div>Email: {userData?.email || "No email available"}</div>
                </div>
            </div>
        </div>
    );
}
