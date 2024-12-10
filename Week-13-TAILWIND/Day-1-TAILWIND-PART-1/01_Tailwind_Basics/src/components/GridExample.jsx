// Function component to demonstrate a Grid layout using Tailwind CSS
function GridExample() {
    return (
        <div>
            {/* Header section */}
            <h2 className="mt-4 text-[30px] font-bold">
                Grid Example using Tailwind
            </h2>

            {/* Grid container with 12-column layout */}
            <div className="grid grid-cols-12">
                {/* First child occupying 4 columns */}
                <div className="bg-blue-600 col-span-4 p-2">
                    Child 1
                </div>
                {/* Second child occupying 6 columns */}
                <div className="bg-red-600 col-span-6 p-2">
                    Child 2
                </div>
                {/* Third child occupying 2 columns */}
                <div className="bg-yellow-600 col-span-2 p-2">
                    Child 3
                </div>
            </div>
        </div>
    );
}

// Exporting the component to use it in other parts of the application
export default GridExample;
