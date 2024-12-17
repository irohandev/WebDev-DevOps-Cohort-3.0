import { ReactElement } from "react"; // Importing ReactElement type for defining the icon prop type

// SidebarItem component definition
export function SidebarItem({text, icon}: { // Destructuring props: text (string), icon (ReactElement)
    text: string; // The text displayed next to the icon
    icon: ReactElement; // The icon element rendered alongside the text
}) {
    return (
        <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150">
            {/* Icon section */}
            <div className="pr-2">
                {icon} {/* Rendering the passed icon */}
            </div>
            {/* Text section */}
            <div>
                {text} {/* Rendering the passed text */}
            </div>
        </div>
    );
}
