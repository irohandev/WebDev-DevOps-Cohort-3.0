// Importing ReactElement type for typing React elements like icons
import { ReactElement } from "react";

// Defining the properties that the Button component can accept
interface ButtonProps {
    variant: "primary" | "secondary"; 
    text: string; 
    startIcon?: ReactElement; 
    onClick?: () => void;
    fullWidth?: boolean; 
    loading?: boolean; 
}

// Mapping button variants to their respective CSS classes
const variantClasses = {
    "primary": "bg-purple-600 text-white", // Styles for primary variant
    "secondary": "bg-purple-200 text-purple-600", // Styles for secondary variant
};

// Default CSS classes for all buttons
const defaultStyles = "px-4 py-2 rounded-md font-light flex items-center";      //items-center is for vertically allignment of the item to be center

// The Button functional component
export function Button({ variant, text, startIcon, onClick, fullWidth, loading }: ButtonProps) {
    return (
        // A button element with dynamic class names and properties
        <button onClick={onClick} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""}` } disabled={loading} >
            {/* Container for optional start icon */}
            <div className="pr-2">
                {startIcon}
            </div>
            {/* Button text */}
            {text}
        </button>
    );
}
