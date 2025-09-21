import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    zip: '',
    email: '',
  });

  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.productId.price) * Number(item.quantity),
    0
  );
  const shipping = 0;
  const total = subtotal + shipping;

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    try {
      const productsForOrder = cartItems.map(item => ({
        _id: item.productId._id,
        name: item.productId.name,
        price: item.productId.price,
        quantity: item.quantity,
      }));

      const orderData = {
        customerInfo: formData, 
        products: productsForOrder,
        totalAmount: total,
      };
      
      const response = await axios.post('https://figma-backend-dzfn.onrender.com/api/orders', orderData);

      if (response.status === 201) {
        clearCart();
        navigate('/order-confirmation');
        console.log("Order placed successfully!", response.data);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      console.log("There was an error placing your order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Shipping Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Shipping Information</h2>
          <form onSubmit={handleCheckout} className="space-y-5">
            {['name', 'address', 'city', 'zip', 'email'].map((field) => (
              <div key={field} className="flex flex-col">
                <label htmlFor={field} className="text-gray-700 font-medium capitalize">{field === 'zip' ? 'ZIP Code' : field}</label>
                <input
                  type={field === 'email' ? 'email' : 'text'}
                  id={field}
                  value={formData[field]}
                  onChange={handleInputChange}
                  className="mt-2 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                  required
                />
              </div>
            ))}
            <button
              type="submit"
              className="w-full mt-4 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-xl shadow-md transition text-lg"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Order Summary</h2>
          <div className="space-y-4 max-h-[60vh] overflow-y-auto">
            {cartItems.map(item => (
              <div key={item._id} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition">
                <div>
                  <p className="font-medium text-gray-800">{item.productId.name}</p>
                  <p className="text-gray-500 text-sm">Qty: {item.quantity}</p>
                </div>
                <p className="font-semibold text-gray-700">${(Number(item.productId.price) * Number(item.quantity)).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-gray-700 font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700 font-medium">
              <span>Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/cart" className="mt-6 text-center text-blue-500 hover:underline">
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
