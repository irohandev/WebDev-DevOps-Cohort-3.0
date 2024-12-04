// Importing useState hook from React for state management
import { useState } from "react"; 

// Importing the PostComponent from a local file
import { PostComponent } from "./Post"; 

// Main App component declaration
function App() { 
  // Initializing 'posts' state as an empty array and providing 'setPosts' to update it
  const [posts, setPosts] = useState([]); 

  // Mapping over 'posts' array to render each post as a PostComponent
  const postComponents = posts.map(post => 
    <PostComponent 
      // Passing 'name' prop to PostComponent
      name={post.name} 
      // Passing 'subtitle' prop to PostComponent
      subtitle={post.subtitle} 
      // Passing 'time' prop to PostComponent (minor typo: should be post.time instead of post.title)
      time={post.title} 
      // Passing 'image' prop to PostComponent
      image={post.image} 
      // Passing 'description' prop to PostComponent
      description={post.description} 
    />
  )

  // Function to add a new post to the 'posts' state
  function addPost() { 
    // Using spread operator to add a new post while retaining existing posts
    setPosts([...posts, { 
      // Name of the user for the new post
      name: "Rohan Dev Singh", 
      // Subtitle for the new post
      subtitle: "2000 followers", 
      // Time for the new post
      time: "12m ago", 
      // Image URL for the new post
      image: "https://assets-prd.ignimgs.com/2021/10/14/demonslayer-art-1634244394273.png", 
      // Description for the new post
      description: "Heyy Everyone!" 
    }])
  }

  // JSX to render the App component UI
  return ( 
    // Styling the main container
    <div style={{background: "#dfe6e9", height: "100vh", }}> 
      {/* Button to add a new post on click */}
      <button onClick={addPost}>Add post</button> 
      {/* Flex container to center the content */}
      <div style={{display: "flex", justifyContent: "center" }}> 
        {/* Container for the list of posts */}
        <div> 
          {/* Rendering the list of PostComponents */}
          {postComponents} 
        </div>
      </div>
    </div>
  )
}

// Exporting App component as the default export
export default App;
