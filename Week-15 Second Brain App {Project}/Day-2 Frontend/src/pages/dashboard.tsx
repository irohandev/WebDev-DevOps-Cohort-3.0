import { useEffect, useState } from "react" // Importing React hooks to manage state and side effects
import { Button } from "../components/Button" // Importing the Button component
import { Card } from "../components/Card" // Importing the Card component
import { CreateContentModal } from "../components/CreateContentModal" // Importing the modal to create content
import { PlusIcon } from "../icons/PlusIcon" // Importing Plus icon for the 'Add content' button
import { ShareIcon } from "../icons/ShareIcon" // Importing Share icon for the 'Share brain' button
import { Sidebar } from "../components/Sidebar" // Importing Sidebar component for navigation
import { useContent } from "../hooks/useContent" // Custom hook to fetch content
import { BACKEND_URL } from "../config" // Backend URL for API requests
import axios from "axios" // Importing axios for making HTTP requests

// Dashboard component that renders the main page
export function Dashboard() {
  // State to manage the modal visibility
  const [modalOpen, setModalOpen] = useState(false);
  // Custom hook to fetch content and refresh the content list
  const {contents, refresh} = useContent();

  // useEffect hook to refresh the content whenever the modalOpen state changes
  useEffect(() => {
    refresh();
  }, [modalOpen])

  return (
    <div>
      <Sidebar /> {/* Sidebar component for navigation */}
      
      <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2">
        {/* CreateContentModal component for adding new content, controlled by modalOpen state */}
        <CreateContentModal open={modalOpen} onClose={() => setModalOpen(false)} />
        
        <div className="flex justify-end gap-4">
          {/* Button to open the 'Create Content' modal */}
          <Button onClick={() => setModalOpen(true)} variant="primary" text="Add content" startIcon={<PlusIcon />} />
          
          {/* Button to share the brain content */}
          <Button onClick={async () => {
              // Making a POST request to share the brain content
              const response = await axios.post(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
              }, {
                  headers: {
                      "Authorization": localStorage.getItem("token") // Passing the authorization token in the request header
                  }
              });
              // Constructing the share URL and alerting the user with the link
              const shareUrl = `http://localhost:5173/share/${response.data.hash}`;
              alert(shareUrl);
          }} variant="secondary" text="Share brain" startIcon={<ShareIcon />} />
        </div>

        <div className="flex gap-4 flex-wrap">
          {/* Rendering the content cards dynamically from the 'contents' array */}
          {contents.map(({type, link, title}) => (
            <Card 
                type={type} 
                link={link} 
                title={title} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}
