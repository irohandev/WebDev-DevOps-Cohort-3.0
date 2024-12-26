// Main sign-up component that renders a centered form card
export default function Signin() {
    return (
        // Full-height container with centered content
        <div className="h-screen flex justify-center flex-col">
            {/* Card container with horizontal centering */}
            <div className="flex justify-center">
                {/* Card component with hover effects and shadow */}
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div>
                        {/* Header section with padding */}
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">
                                Sign up
                            </div>
                        </div>
                        {/* Form section with input fields and button */}
                        <div className="pt-2">
                            <LabelledInput 
                                label="Username" 
                                placeholder="harkirat@gmail.com" 
                            />
                            <LabelledInput 
                                label="Password" 
                                type="password" 
                                placeholder="123456" 
                            />
                            {/* Sign-up button with full width and styling */}
                            <button 
                                type="button" 
                                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            >
                                Sign up
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

// TypeScript interface for LabelledInput props
interface LabelledInputType {
    label: string;          // Text label above the input
    placeholder: string;    // Placeholder text inside the input
    type?: string;         // Optional input type (defaults to "text")
}

// Reusable input component with label
function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
        // Container for input and label
        <div>
            {/* Label with consistent styling */}
            <label className="block mb-2 text-sm text-black font-semibold pt-4">
                {label}
            </label>
            {/* Input field with standard styling and focus states */}
            <input 
                type={type || "text"}
                id="first_name" 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                placeholder={placeholder} 
                required 
            />
        </div>
    );
}