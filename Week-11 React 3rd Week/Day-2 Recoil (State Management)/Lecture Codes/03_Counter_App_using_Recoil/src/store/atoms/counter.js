// Importing the 'atom' function from the Recoil library for state management
import { atom } from "recoil";

// Defining a Recoil atom to manage the state of a counter
export const counterAtom = atom({
    // Setting the default value of the counter to 0
    default: 0,
    // Assigning a unique key to identify this atom in the Recoil state tree
    key: "counter"
});
