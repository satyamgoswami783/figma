import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Modal from "../components/Modal";

function Shop() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState(null);
  const limit = 6;

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const fetchProducts = async () => {
    const res = await axios.get(`http://localhost:5000/api/cart?page=${page}&limit=${limit}`);
    setProducts(res.data.products);
    setTotal(res.data.total);
  };

  const handleAdd = () => {
    setEditProduct(null);
    setShowModal(true);
  };

  const handleEdit = (product) => {
    setEditProduct(product);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/cart/${id}`);
    fetchProducts();
  };

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Shop</h1>
        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          + Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p._id}
            product={p}
            onEdit={() => handleEdit(p)}
            onDelete={() => handleDelete(p._id)}
          />
        ))}
      </div>

      <Pagination total={total} limit={limit} page={page} setPage={setPage} />

      {showModal && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          editProduct={editProduct}
          refreshProducts={fetchProducts}
        />
      )}
    </div>
  );
}

export default Shop;
