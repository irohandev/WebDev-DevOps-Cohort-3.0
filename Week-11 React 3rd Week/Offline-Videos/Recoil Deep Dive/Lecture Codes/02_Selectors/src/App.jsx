import { RecoilRoot, useRecoilValue } from 'recoil'; 
// Import RecoilRoot to provide a context for recoil state and useRecoilValue to read atom/selector values
import { netwrokAtom, jobsAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './store/atom'; 
// Import state atoms and selectors from the recoil store
import { useMemo } from 'react'; 
// Import useMemo for memoizing computations
import './App.css'; 
// Import CSS for styling the application

function App() {
  return (
    <RecoilRoot> 
      {/* RecoilRoot provides a context for managing recoil state in the component tree */}
      <div>
        <Wrapper/> 
        {/* Render the Wrapper component which contains the application UI */}
      </div>
    </RecoilRoot>
  );
}

function Wrapper() {
  // Use useRecoilValue hook to read atom values (state)
  const networkAtomCount = useRecoilValue(netwrokAtom); // Current state of netwrokAtom
  const jobsAtomCount = useRecoilValue(jobsAtom); // Current state of jobsAtom
  const notificationAtomCount = useRecoilValue(notificationsAtom); // Current notifications state
  const messagingAtomCount = useRecoilValue(messagingAtom); // Current messaging state

  // === APPROACH 1 ===
  // Direct summation of all atom values
  // const totalAtoms = networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;

  // === APPROACH 2 ===
  // Use useMemo for performance optimization. Memoize the result to avoid recalculating unless dependencies change.
  // const totalAtomsUsingMemo = useMemo(() => {
  //   return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
  // }, [networkAtomCount, jobsAtomCount, notificationAtomCount, messagingAtomCount]);

  // === APPROACH 3 ===
  // Use a Recoil selector to derive the total notification count
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return (
    <>  
      <button>Home</button>
      {/* Here brackets are just for output ..no other things bs dikhne mai sahi lage thats why!  */}
      <button>My Network ({networkAtomCount >= 100 ? "99+" : networkAtomCount})</button> {/* Conditional display for count */}

      <button>Jobs ({jobsAtomCount})</button>

      <button>Messaging ({messagingAtomCount})</button>

      <button>Notifications ({notificationAtomCount})</button>

      {/* Approach 1 */}
      {/* <button>ME {totalAtoms}</button> */}
      
      {/* Approach 2 */}
      {/* <button>ME {totalAtomsUsingMemo}</button> */}

      {/* Use selector-derived total notification count */}
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}


export default App
