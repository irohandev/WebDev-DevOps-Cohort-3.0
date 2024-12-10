// Define a functional React component named FlexExample
function FlexExample() {
    return (
        <div>
            {/* Title section with margin-top, text size, and bold font using Tailwind classes */}
            <h2 className="mt-4 text-[30px] font-bold">
                Flexbox Example using Tailwind
            </h2>

            {/* A flex container with centered alignment and a gap of 2 (Tailwind classes used) */}
            <div className="flex justify-center gap-2">
                {/* Flex child 1 with red background and padding */}
                <div className="bg-red-200 p-3">Child 1</div>

                {/* Flex child 2 with green background and padding */}
                <div className="bg-green-200 p-3">Child 2</div>

                {/* Flex child 3 with yellow background and padding */}
                <div className="bg-yellow-200 p-3">Child 3</div>
            </div>
        </div>
    );
}

// Export the FlexExample component so it can be used in other files
export default FlexExample;
