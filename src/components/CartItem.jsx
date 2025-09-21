import React from 'react';

const CartItem = ({ item, removeFromCart, updateQuantity }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex-shrink-0">
        <img
          src={item?.image}
          alt={item?.name}
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>

      <div className="flex-grow ml-4">
        <h3 className="text-lg font-semibold">{item?.name}</h3>
        <p className="text-gray-600">${item?.price?.toFixed(2)}</p>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => updateQuantity(item._id, item?.quantity - 1)}
          disabled={item?.quantity <= 1}
          className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 disabled:opacity-50"
        >
          -
        </button>
        <span className="text-lg font-semibold w-6 text-center">{item?.quantity}</span>
        <button
          onClick={() => updateQuantity(item._id, item?.quantity + 1)}
          className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300"
        >
          +
        </button>
      </div>
      
      <p className="ml-4 font-semibold text-lg text-gray-800 hidden md:block w-24 text-right">
        ${(item?.price * item?.quantity).toFixed(2)}
      </p>

      <button
        onClick={() => removeFromCart(item._id)}
        className="ml-4 text-red-500 hover:text-red-700 text-2xl"
      >
        &times;
      </button>
    </div>
  );
};

export default CartItem;