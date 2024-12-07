// Importing the 'atom' and 'selector' functions from the Recoil library for state management
import { atom, selector } from "recoil";

// Defining a Recoil atom to manage the state of a counter
export const counterAtom = atom({
    // Setting the default value of the counter to 0
    default: 0,
    // Assigning a unique key to identify this atom in the Recoil state tree
    key: "counter"
});

// Defining a selector to derive whether the current counter value is even or not
export const evenSelector = selector({
    key: "isEvenSelector",  // Unique key for this selector
    get: function({ get }) {
        // Retrieving the current value of the counter from the atom
        const currentCount = get(counterAtom);
        // Checking if the current count is an even number
        const isEven = (currentCount % 2 === 0);
        // Returning whether the current count is even
        return isEven;
    }
});
