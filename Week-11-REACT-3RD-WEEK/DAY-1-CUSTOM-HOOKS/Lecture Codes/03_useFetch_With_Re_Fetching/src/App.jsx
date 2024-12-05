import { useState } from "react"; // Import useState hook for managing state
import useFetch from "../../03_useFetch_With_Re_Fetching/src/hooks/useFetch"; // Import custom useFetch hook for fetching data

function App() {
    // State to keep track of the current post number, initially set to 1
    const [currentPost, setCurrentPost] = useState(1);

    // Call the useFetch hook to fetch data from the API based on currentPost with a 5-second interval
    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost, 5000);

    // If data is still loading, display a loading message
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {/* Button to set currentPost to 1 */}
            <button onClick={() => setCurrentPost(1)}>1</button>
            {/* Button to set currentPost to 2 */}
            <button onClick={() => setCurrentPost(2)}>2</button>
            {/* Button to set currentPost to 3 */}
            <button onClick={() => setCurrentPost(3)}>3</button>

            {/* Display the fetched data as a string */}
            <p>{JSON.stringify(finalData)}</p>
        </div>
    );
}

export default App;
