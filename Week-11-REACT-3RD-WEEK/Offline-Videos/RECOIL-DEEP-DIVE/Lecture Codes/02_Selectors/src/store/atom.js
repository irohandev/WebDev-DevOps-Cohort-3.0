// Importing the Recoil library components 'atom' and 'selector' for state management
import { atom, selector } from "recoil";

// Defining an atom to store the state of the network notifications count
export const netwrokAtom = atom({
    key: "netwrokAtom", // Unique identifier for this atom
    default: 104 // Default value for the state
});

// Defining an atom to store the state of the jobs notifications count
export const jobsAtom = atom({
    key: "jobsAtom", // Unique identifier for this atom
    default: 0 // Default value for the state
});

// Defining an atom to store the state of the generic notifications count
export const notificationsAtom = atom({
    key: "notificationsAtom", // Unique identifier for this atom
    default: 12 // Default value for the state
});

// Defining an atom to store the state of the messaging notifications count
export const messagingAtom = atom({
    key: "messagingAtom", // Unique identifier for this atom
    default: 0 // Default value for the state
});

// Defining a selector to compute the total count of notifications
export const totalNotificationSelector = selector({
    key: "totalNotificationSelector", // Unique identifier for this selector
    get: ({ get }) => {
        // Getting the current values of each atom using the Recoil 'get' function
        const networkAtomCount = get(netwrokAtom);
        const jobsAtomsCount = get(jobsAtom);
        const notificationAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);

        // Returning the total notifications count as the sum of all individual counts
        return networkAtomCount + jobsAtomsCount + notificationAtomCount + messagingAtomCount;
        // RETURNING THIS AS WE ARE CURRENTLY USING APPROACH - 3 IN APP.JSX

    }
});




