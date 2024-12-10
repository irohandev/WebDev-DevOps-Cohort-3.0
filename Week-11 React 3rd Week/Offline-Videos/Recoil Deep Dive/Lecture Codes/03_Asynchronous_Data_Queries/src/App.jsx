// Import hooks from recoil
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

// Import atom and selector
import { notifications, totalNotificationSelector } from "./store/atom";

// Main app component
function App() {
    return (
        // Provide Recoil state context
        <RecoilRoot>
            <MainApp />
        </RecoilRoot>
    );
}

// MainApp component
function MainApp() {
    const [networkCount, setNetworkCount] = useRecoilState(notifications);
    const totalNotificationCount = useRecoilValue(totalNotificationSelector);

    return (
        <>
            <button>Home</button>
            <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
            <button>Jobs {networkCount.jobs}</button>
            <button>Messaging ({networkCount.messaging})</button>
            <button>Notifications ({networkCount.notifications})</button>
            <button>Me ({totalNotificationCount})</button>
        </>
    );
}

export default App;
