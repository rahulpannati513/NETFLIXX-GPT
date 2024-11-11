import React from "react";
import { Link } from "react-router-dom"; // If you're using react-router for navigation

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md text-center">
        <h1 className="text-6xl font-bold text-red-500">Oops!</h1>
        <p className="mt-4 text-lg text-gray-700">
          It seems like you've stumbled upon an error...
        </p>
        <p className="mt-2 text-base text-gray-600">
          The page you're looking for isn't available.
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-red-500 text-white text-sm font-semibold rounded-md hover:bg-red-400 transition duration-300"
        >
          Go back to Home
        </Link>
      </div>
      <div className="mt-10">
        <img
          src="https://www.example.com/404-image.png" // Replace with your image URL
          alt="Error illustration"
          className="w-1/2 mx-auto"
        />
      </div>
    </div>
  );
};

export default ErrorPage;
