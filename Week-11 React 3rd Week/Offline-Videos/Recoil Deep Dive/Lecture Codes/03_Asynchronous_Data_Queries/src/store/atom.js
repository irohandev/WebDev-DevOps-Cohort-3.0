import { atom, selector } from "recoil"; // Import Recoil's atom and selector for state management
import axios from "axios"; // Import Axios for making HTTP requests

// Atom for notifications
export const notifications = atom({
  key: "notifications", // Unique key for the atom to identify its state
  default: { network: 0, jobs: 0, messaging: 0, notifications: 0 }, // Default static value for notification counts
});

// Selector to fetch notifications data
export const notificationsSelector = selector({
  key: "notificationsSelector", // Unique key for the selector to identify its state
  get: async () => {
    try {
      const response = await axios.get("https://sum-server.100xdevs.com/notifications"); // Fetch notifications from the server
      return response.data; // Return the fetched data
    } catch (error) {
      console.error("Error fetching notifications:", error); // Log errors if the request fails
      return { network: 0, jobs: 0, messaging: 0, notifications: 0 }; // Return fallback values if an error occurs
    }
  },
});

// Selector to calculate total notifications
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector", // Unique key for the selector to identify its state
  get: ({ get }) => {
    try {
      const allNotifications = get(notifications); // Get the current state of the notifications atom
      return (
        allNotifications.network +
        allNotifications.jobs +
        allNotifications.messaging +
        allNotifications.notifications
      ); // Calculate and return the sum of all notification types
    } catch (error) {
      console.error("Error calculating total notifications:", error); // Log errors if calculation fails
      return 0; // Return 0 as a fallback value
    }
  },
});
