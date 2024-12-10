import { useEffect, useState } from "react";

export function usePostTitle() {

  // State to store the fetched post data
  const [post, setPost] = useState({});

  // Function to fetch the post data from the API
  async function getPost() {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1"); // API call to fetch a specific post
    const json = await response.json(); // Convert the response to JSON format
    setPost(json); // Update the state with the fetched post data
  }

  // useEffect runs when the component mounts
  // Calls the getPost function to fetch the data
  useEffect(() => {
    getPost();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Returns the title of the fetched post
  return post.title;

}


export function useFetch(url) {

  // State to store the data fetched from the API
  const [finalData, setFinalData] = useState({});

  // Function to fetch data from the provided URL
  async function getDetails() {

    const response = await fetch(url); // Make an API call to the provided URL
    const json = await response.json(); // Parse the response into JSON format
    setFinalData(json) // Store the parsed data in the state
  }

  // useEffect ensures the fetch function runs when the component using this hook mounts
  useEffect(() => {
    getDetails(); // Trigger the API call
  }, []); // Empty dependency array ensures the effect runs only once on mount

  // Return the fetched data for use in the calling component
  return finalData;
}



