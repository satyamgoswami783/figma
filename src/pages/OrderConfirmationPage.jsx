import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const OrderConfirmationPage = () => {
  const location = useLocation();
  const orderId = location.state?.orderId; 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-lg w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-16 w-16 text-green-500 mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Order Placed!</h1>
        <p className="text-xl text-gray-600 mb-6">Thank you for your purchase.</p>
        
        {orderId ? (
          <p className="text-lg text-gray-700 mb-8">
            Your order number is: <span className="font-semibold text-blue-600">{orderId}</span>
          </p>
        ) : (
          <p className="text-lg text-gray-700 mb-8">
            Your order has been placed.
          </p>
        )}
        
        <div className="flex justify-center space-x-4">
          <Link to="/" className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationPage;