"use client";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-black text-gray-100">
      <div className="text-center bg-gray-900 shadow-lg rounded-lg p-10 w-96">
        <h1 className="text-3xl font-bold text-white mb-6">Todo Application</h1>
        <p className="text-gray-300 mb-8">Manage your tasks with ease</p>

        <div className="space-y-6">
          <Link
            className="block w-full text-center text-md bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            href="/signin"
          >
            Sign In
          </Link>
          <Link
            className="block w-full text-center text-md bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            href="/signup"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}


