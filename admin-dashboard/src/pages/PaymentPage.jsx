import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";

const PaymentPage = ({ bookingData }) => {
  const navigate = useNavigate();

  // Paystack public key (replace with yours)
  const publicKey = "YOUR_PAYSTACK_PUBLIC_KEY";

  // Default booking data if not passed
  const [data, setData] = useState({
    hotel: bookingData?.hotel || "Plaza de' Aruna Hotel",
    room: bookingData?.room || "Deluxe Suite",
    checkIn: bookingData?.checkIn || "20 Feb 2026",
    checkOut: bookingData?.checkOut || "23 Feb 2026",
    guests: bookingData?.guests || "2 Adults",
    price: bookingData?.price || 120000,
    name: "",
    email: "",
  });

  const componentProps = {
    email: data.email || "customer@example.com",
    amount: data.price * 100, // Paystack expects kobo
    publicKey,
    text: `Pay ₦${data.price}`,
    onSuccess: () => navigate("/success"),
    onClose: () => navigate("/failure"),
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

        {/* Booking Summary */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Booking Summary</h2>
          <div className="space-y-2 text-sm">
            <p><span className="font-medium">Hotel:</span> {data.hotel}</p>
            <p><span className="font-medium">Room:</span> {data.room}</p>
            <p><span className="font-medium">Check-in:</span> {data.checkIn}</p>
            <p><span className="font-medium">Check-out:</span> {data.checkOut}</p>
            <p><span className="font-medium">Guests:</span> {data.guests}</p>
          </div>
          <div className="border-t mt-4 pt-4 flex justify-between font-semibold">
            <span>Total</span>
            <span>₦{data.price}</span>
          </div>
        </div>

        {/* Payment Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Payment Details</h2>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Aishat Ajolayo"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="example@email.com"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Paystack Button */}
            <PaystackButton
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition"
              {...componentProps}
            />
          </form>
        </div>

      </div>
    </div>
  );
};

export default PaymentPage;
