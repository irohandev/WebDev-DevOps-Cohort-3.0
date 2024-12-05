import { useState, useEffect } from "react";

// Custom hook for fetching data from a given URL with an optional interval for repeated requests
function useFetch(url, retryTime) {
    const [finalData, setFinalData] = useState({}); // State to store the fetched data
    const [loading, setLoading] = useState(true); // State to track the loading status

    // Function to fetch data from the provided URL
    async function getDetails() {
        try {
            let response = await fetch(url); // Fetch data from the provided URL
            let json = await response.json(); // Parse the response as JSON
            setFinalData(json); // Update state with the fetched data
        } catch (error) {
            console.log(error); // Log any errors encountered during the fetch
        } finally {
            setLoading(false); // Set loading state to false once the fetch operation is complete or fails
        }
    }

    // useEffect hook to fetch data initially and set up an interval for repeated requests if a retry time is provided
    useEffect(() => {
        getDetails(); // Perform the initial data fetch

        if (retryTime) {
            
            // If a retry time (interval) is provided, set up a periodic data fetch
            const fetchRetryTime = setInterval(() => {
                getDetails(); // Fetch data periodically at the specified interval
            }, retryTime);

            // Clean up the interval when the component is unmounted or when dependencies change
            return () => clearInterval(fetchRetryTime);
        }
    }, [url, retryTime]); // Re-run the effect if the URL or retry time changes

    // Return the fetched data and loading state to be used in the component
    return { finalData, loading };
}

export default useFetch;
