/*
This `page.tsx` file is used to handle dynamic routes for individual blog pages. 
For example, if you access a URL like `/blog/1`, `/blog/2`, etc., each of these URLs corresponds to a specific blog post.

The dynamic nature of the URL means that we don’t need to create a separate page for each individual blog post. 
Instead, by using square brackets (`[]`) around the route parameter (e.g., `blogId`), we can make the route dynamic. 
This allows us to fetch the blog content for any given `blogId` dynamically without having to create separate pages for each blog post.
*/

import axios from "axios";  // Importing axios to make HTTP requests

// The BlogPage function component will handle rendering the blog content based on the dynamic blogId
export default async function BlogPage({params}: any) {

    // Extracting the blogId parameter from the route
    const postId = (await params).blogId; 

    // Using the postId to fetch the specific blog data from the API
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);

    // Storing the fetched data from the API response
    const data = response.data;

    // Returning the blog page's HTML content to be displayed
    return(
        <div>
            <h1>Blog Page</h1>  {/* Displaying the main heading */}
            <br/>
            title - {data.title}  {/* Displaying the title of the blog post */}
            <br />
            body - {data.body}    {/* Displaying the body/content of the blog post */}
        </div>
    )
}
