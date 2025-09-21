import React, { useState, useEffect } from "react";
import axios from "axios";

function Modal({ isOpen, onClose, editProduct, refreshProducts }) {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
    discount: 0,
    image:  "OIPP.webp" 
  });

  useEffect(() => {
    if (editProduct) {
      setFormData(editProduct);
    } else {
      setFormData({
        name: "",
        category: "",
        brand: "",
        price: "",
        discount: 0,
        image: "OIPP.webp" 

      });
    }
  }, [editProduct]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editProduct) {
        // Update product
        await axios.put(`https://figma-furniro-backend.onrender.com/api/cart/${editProduct._id}`, formData);
      } else {
        // Add product
        await axios.post("https://figma-furniro-backend.onrender.com/api/cart", formData);
      }
      refreshProducts();
      onClose();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{editProduct ? "Edit Product" : "Add Product"}</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={formData.brand}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
            required
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount (%)"
            value={formData.discount}
            onChange={handleChange}
            className="border px-3 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
          >
            {editProduct ? "Update" : "Add"}
          </button>
        </form>
        <button
          onClick={onClose}
          className="mt-3 w-full bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Modal;
