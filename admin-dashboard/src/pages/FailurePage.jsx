import React from "react";
import { Link } from "react-router-dom";

const FailurePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 p-4">
    <h1 className="text-3xl font-bold mb-4 text-red-700">Payment Failed</h1>
    <p className="mb-6">Oops! Something went wrong. Please try again.</p>
    <Link to="/payment" className="bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition">
      Try Again
    </Link>
  </div>
);

export default FailurePage;
