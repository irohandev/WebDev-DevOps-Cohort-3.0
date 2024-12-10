// Import CSS and necessary Recoil functions
import './App.css'
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil'
import { netwrokAtom, jobsAtom, notificationsAtom, messagingAtom } from './store/atom'

// Main App component wrapped in RecoilRoot to enable Recoil state management
function App() {
  return (
    <RecoilRoot>
      <div>
        <Wrapper />
      </div>
    </RecoilRoot>
  )
}

// Wrapper component to display buttons with state-driven content
function Wrapper() {
  const networkAtomCount = useRecoilValue(netwrokAtom); // Read the current state of networkAtom
  const jobsAtomCount = useRecoilValue(jobsAtom); // Read the current state of jobsAtom
  const notificationAtomCount = useRecoilValue(notificationsAtom); // Read notifications state
  const messagingAtomCount = useRecoilValue(messagingAtom); // Read messaging state

  return (
    <>  
      <button>Home</button>
      <button>My Network {networkAtomCount >= 100 ? "99+" : networkAtomCount}</button> {/* Conditional display for count */}
      <button>Jobs {jobsAtomCount}</button>
      <button>Messaging {messagingAtomCount}</button>
      <button>Notifications {notificationAtomCount}</button>
      <UpdateButton /> {/* Button to update messaging state */}
    </>
  )
}

// Component to update messaging count
function UpdateButton() {
  const setMessagingAtomCount = useSetRecoilState(messagingAtom) // Setter for messagingAtom

  return (
    // Render a button that updates the messagingAtom count when clicked
    <button
        onClick={() => {
            // Increment the messagingAtom count by 1
            setMessagingAtomCount((count) => count + 1);
        }}
    >Me</button>
);
}

export default App;
