// Import the Navbar component from the specified path
import Navbar from "@/components/navbar"; 

// Import the ReactNode type for defining the type of children prop
import { ReactNode } from "react";

// Define the interface for the AuthLayoutProps to type-check the props
interface AuthLayoutProps {
  children: ReactNode; // children is expected to be a ReactNode, typically JSX content
}

// Define the AuthLayout component as the default export
// This layout component wraps its children with a Navbar
export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div>
      {/* Render the Navbar component at the top */}
      <Navbar />
      {/* Render the children content below the Navbar */}
      {children}
    </div>
  );
}
