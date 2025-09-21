import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);
    addToCart(product);
  };

  return (
    <div className="group border rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-2xl transition duration-300">
      {/* Product Image */}
      <div className="relative w-full h-56 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow">
          ${product.price?.toFixed(2)}
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-800 truncate">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>

        {/* Action Buttons */}
        <div className="mt-5 flex justify-between items-center gap-2 
                        opacity-0 group-hover:opacity-100 
                        translate-y-2 group-hover:translate-y-0
                        transition-all duration-300 ease-in-out">
          {/* Edit Button */}
          <button
            onClick={onEdit}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg text-sm shadow-md 
                       hover:bg-indigo-500 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            Edit
          </button>

          {/* Delete Button */}
          <button
            onClick={onDelete}
            className="bg-rose-500 text-white px-4 py-2 rounded-lg text-sm shadow-md 
                       hover:bg-rose-500 hover:translate-y-[-3px] hover:shadow-xl transition-all duration-300"
          >
            Delete
          </button>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm shadow-md 
                       hover:bg-gradient-to-r hover:from-emerald-500 hover:to-green-600 
                       hover:text-white hover:shadow-xl transition-all duration-500"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
