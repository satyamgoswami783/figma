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
      // Create a new array with all the required product details
      const productsForOrder = cartItems.map(item => ({
        productId: item.productId._id,
        name: item.productId.name,
        price: item.productId.price,
        image: item.productId.image,
        quantity: item.quantity,
      }));

      const orderData = {
        customerInfo: formData, 
        products: productsForOrder, // Using the new array
        totalAmount: total,
      };
      
      const response = await axios.post('https://figma-furniro-backend.onrender.com/api/orders', orderData);

      if (response.status === 201) {
        clearCart();
        navigate('/order-confirmation');
        console.log("Order placed successfully!", response.data);
      }
    } catch (error) {
      console.error("Error placing order:", error);
      // Removed the alert and replaced with a log
      console.log("There was an error placing your order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
          <form onSubmit={handleCheckout}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 mt-1 border rounded-md" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block text-gray-700">Address</label>
              <input 
                type="text" 
                id="address" 
                value={formData.address} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 mt-1 border rounded-md" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700">City</label>
              <input 
                type="text" 
                id="city" 
                value={formData.city} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 mt-1 border rounded-md" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zip" className="block text-gray-700">ZIP Code</label>
              <input 
                type="text" 
                id="zip" 
                value={formData.zip} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 mt-1 border rounded-md" 
                required 
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email Address</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email} 
                onChange={handleInputChange} 
                className="w-full px-4 py-2 mt-1 border rounded-md" 
                required 
              />
            </div>
            <button type="submit" className="bg-green-500 text-white w-full px-4 py-2 rounded-md hover:bg-green-600">
              Place Order
            </button>
          </form>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cartItems.map(item => (
              <div key={item._id} className="flex items-center justify-between">
                <span>{item.productId.name} x {item.quantity}</span>
                <span>${(Number(item.productId.price) * Number(item.quantity)).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-300">
            <div className="flex justify-between font-medium">
              <span>Subtotal:</span>
              <span>${subtotal?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Shipping:</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-xl font-bold mt-2">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link to="/cart" className="block text-center mt-4 text-blue-500 hover:underline">
            ← Back to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
