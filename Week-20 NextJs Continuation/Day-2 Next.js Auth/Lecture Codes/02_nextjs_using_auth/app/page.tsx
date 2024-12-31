// Client-Side Rendering Example

// "use client"; 
// Indicates that this component should be rendered on the client side.

// import { SessionProvider, signIn, signOut, useSession } from "next-auth/react";
// Importing functions and hooks from the 'next-auth/react' library.
// - SessionProvider: Wraps components to provide session data.
// - signIn: Function to initiate user sign-in.
// - signOut: Function to log the user out.
// - useSession: Hook to access session information (status, data).

// export default function Home() {
// Exporting a default component for the home page.
// The SessionProvider wraps RealHome to provide session context.

//   return (
//     <SessionProvider>
//       <RealHome/>
//     </SessionProvider>    
//   );
// }

// function RealHome() {
// Defines the RealHome component where user authentication actions occur.

//   const session = useSession();
//   // useSession hook provides session information and status.

//   return (
//     <div>
//       {/* If the user is authenticated, show a sign-out button */}
//       {session.status === "authenticated" && <button onClick={() => signOut()}>Sign Out</button>}

//       {/* If the user is unauthenticated, show a sign-in button */}
//       {session.status === "unauthenticated" && <button onClick={() => signIn()}>Sign In</button>}
//     </div>
//   );
// }

// In client-side rendering (CSR), the session data is fetched and handled directly in the browser.
// The SessionProvider ensures session state is shared across components.




// Server-Side Rendering Example
import { getServerSession } from "next-auth";
// Importing the getServerSession function from 'next-auth' to fetch session data on the server side.

export default async function Home() {
  // Async function to fetch session data before rendering the page.

  const session = await getServerSession();
  // getServerSession fetches session information during the server-side rendering process.
  // This ensures the session data is available when the page is rendered.

  return (
    <div>
      {JSON.stringify(session)}
      {/* Displaying the session data as a JSON string for debugging purposes. */}
    </div>
  );
}

// In server-side rendering (SSR):
// - The session is retrieved on the server before the page is sent to the client.
// - This ensures that the session data is available at the time of initial page load.
// - It's useful for pages requiring secure access or personalized content.

// Comparison:
// CSR: Fetches session data dynamically in the browser, providing flexibility and responsiveness.
// SSR: Fetches session data on the server, ensuring data is available during the initial page load, which improves SEO and initial rendering performance.
