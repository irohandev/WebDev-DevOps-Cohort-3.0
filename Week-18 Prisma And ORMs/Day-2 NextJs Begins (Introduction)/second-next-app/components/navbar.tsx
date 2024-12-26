export default function Navbar() {
    return (
      // Navigation bar container with a dark background and white text
      <nav className="bg-gray-900 text-white shadow-md">
        {/* Wrapper for centering and adding padding to the navigation content */}
        <div className="container mx-auto px-4 py-3">
          {/* Unordered list for navigation items, styled as a flex row with spacing */}
          <ul className="flex justify-center space-x-6">
            {/* Home link */}
            <li>
              <a
                href="/"
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
                // Font and hover effect for interactivity
              >
                Home
              </a>
            </li>
            {/* About link */}
            <li>
              <a
                href="/about"
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
                // Font and hover effect for interactivity
              >
                About
              </a>
            </li>
            {/* Contact link */}
            <li>
              <a
                href="/contact"
                className="text-lg font-medium hover:text-gray-300 transition-colors duration-300"
                // Font and hover effect for interactivity
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  