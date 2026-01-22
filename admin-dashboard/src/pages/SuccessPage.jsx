import React from "react";
import { Link } from "react-router-dom";

const SuccessPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-green-100 p-4">
    <h1 className="text-3xl font-bold mb-4 text-green-700">Payment Successful!</h1>
    <p className="mb-6">Thank you for your booking. Your payment has been received.</p>
    <Link to="/" className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
      Go Home
    </Link>
  </div>
);

export default SuccessPage;
