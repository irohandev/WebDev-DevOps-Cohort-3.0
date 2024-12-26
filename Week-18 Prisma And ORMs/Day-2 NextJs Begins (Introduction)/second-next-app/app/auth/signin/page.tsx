// Main sign-in component for user authentication
export default function Signin() {
    return (
        // Vertically and horizontally centered container
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                {/* Authentication card with hover effect */}
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                    <div>
                        {/* Sign-in header */}
                        <div className="px-10">
                            <div className="text-3xl font-extrabold">
                                Sign in
                            </div>
                        </div>
                        {/* Authentication form */}
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
                            {/* Authentication submit button */}
                            <button 
                                type="button" 
                                className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}

// Props interface for input component
interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
}

// Reusable form input with label
function LabelledInput({ label, placeholder, type }: LabelledInputType) {
    return (
        <div>
            <label className="block mb-2 text-sm text-black font-semibold pt-4">
                {label}
            </label>
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