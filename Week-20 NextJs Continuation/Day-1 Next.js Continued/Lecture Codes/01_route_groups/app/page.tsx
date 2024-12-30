// Defining a default-exported functional component named Home
export default function Home() {
  return (
    // Outer container styled with Tailwind classes for centering content both vertically and horizontally
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Inner container styled as a card with padding, background, shadow, and rounded corners */}
      <div className="text-center p-4 bg-white shadow-md rounded-lg">
        {/* Heading with bold text, larger size, and dark gray color */}
        <h1 className="text-2xl font-bold text-gray-800">USER PAGE</h1>
        {/* Paragraph with lighter gray text and a top margin */}
        <p className="text-gray-600 mt-2">Welcome to the user page!</p>
      </div>
    </div>
  );
}
