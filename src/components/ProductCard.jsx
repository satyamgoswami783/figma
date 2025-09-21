import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ product, onEdit, onDelete }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    console.log("Adding product to cart:", product);
    addToCart(product);
  };

  return (
    <div className="group border rounded-lg shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-600">${product.price?.toFixed(2)}</p>
        <p className="text-sm mt-2">{product.description}</p>
        <div className="mt-4 flex justify-between items-center space-x-2 
                       opacity-0 group-hover:opacity-100 
                       pointer-events-none group-hover:pointer-events-auto 
                       transition-all duration-300">
          <button
            onClick={onEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            Delete
          </button>
          <button
            onClick={handleAddToCart}
            className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;