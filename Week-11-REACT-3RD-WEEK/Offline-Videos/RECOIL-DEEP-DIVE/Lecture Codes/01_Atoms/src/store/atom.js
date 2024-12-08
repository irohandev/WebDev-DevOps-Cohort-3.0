// Importing the "atom" function from the Recoil library
import { atom } from "recoil";

// Define an atom to manage the network state
export const netwrokAtom = atom({
    key: "netwrokAtom", // Unique key for this atom to ensure unique identification
    default: 104 // Initial default value
});

// Define an atom to manage the job count state
export const jobsAtom = atom({
    key: "jobsAtom", 
    default: 0
});

// Define an atom to manage the notifications count state
export const notificationsAtom = atom({
    key: "notificationsAtom", 
    default: 12 
});

// Define an atom to manage the messaging state
export const messagingAtom = atom({
    key: "messagingAtom", 
    default: 0 
});
