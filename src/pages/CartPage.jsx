import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import CartItem from '../components/CartItem';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const subtotal = cartItems.reduce(
    (total, item) => total + (Number(item?.productId?.price) * Number(item?.quantity)),
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6 md:px-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12">
        Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-lg p-10 text-center">
          <p className="text-2xl text-gray-600 mb-6">Your cart is empty.</p>
          <Link to="/shop">
            <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black text-lg font-semibold rounded-lg shadow-md transition">
              Go to Shop
            </button>
          </Link>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Cart Items */}
          <div className="lg:w-2/3 space-y-6">
            {cartItems.map((item) => (
              <div key={item._id} className="bg-white rounded-2xl shadow-md flex flex-col md:flex-row items-center p-4 md:p-6 hover:shadow-xl transition">
                <img
                  src={item?.productId?.image}
                  alt={item?.productId?.name}
                  className="w-full md:w-40 h-40 object-cover rounded-xl"
                />
                <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                  <h3 className="text-xl font-bold text-gray-800">{item?.productId?.name}</h3>
                  <p className="text-gray-600 mt-1">${item?.productId?.price.toFixed(2)}</p>
                  <p className="text-gray-500 text-sm mt-2 line-clamp-2">{item?.productId?.description}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => updateQuantity(item?._id, item?.quantity - 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="text-gray-700 font-medium">{item?.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item?._id, item?.quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(item?._id)}
                      className="ml-auto px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="lg:w-1/3 bg-white rounded-2xl shadow-md p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-2">Cart Summary</h2>
            <div className="flex justify-between py-2 text-gray-700">
              <p>Subtotal</p>
              <p className="font-semibold">${subtotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between py-2 text-gray-700">
              <p>Shipping</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="flex justify-between py-3 text-lg font-bold border-t border-gray-200 mt-4">
              <p>Total</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <Link to="/checkout">
              <button className="w-full mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md transition flex items-center justify-center gap-2">
                Proceed to Checkout <img width={20} src="right_icon.png" alt="" />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
