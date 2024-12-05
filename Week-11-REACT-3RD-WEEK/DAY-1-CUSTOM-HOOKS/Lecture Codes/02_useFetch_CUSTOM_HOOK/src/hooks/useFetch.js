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
