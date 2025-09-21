import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// Replace this with your actual backend URL from Render
const BACKEND_API_URL = 'https://figma-furniro-backend.onrender.com/api/cartt';

export const CartProvider = ({ children }) => {
  // state for cart items and loading status
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Function to fetch cart data from the backend
  const fetchCart = async () => {
    try {
      const response = await fetch(BACKEND_API_URL);
      if (!response.ok) {
        throw new Error('Failed to fetch cart');
      }
      const data = await response.json();
      // Update the cartItems state with the fetched data
      setCartItems(data.items || []);
    } catch (error) {
      console.error("Failed to fetch cart from backend:", error);
      setCartItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch cart data on initial load
  useEffect(() => {
    fetchCart();
  }, []); // Empty dependency array ensures this runs only once

  // Function to add a product to the cart via API
  const addToCart = async (product) => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_API_URL}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ product }),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      const data = await response.json();
      setCartItems(data.items);
    } catch (error) {
      console.error("Failed to add item to cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to remove an item from the cart via API
  const removeFromCart = async (_id) => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_API_URL}/remove/${_id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }
      const data = await response.json();
      setCartItems(data.items);
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to update item quantity via API
  const updateQuantity = async (_id, newQuantity) => {
    if (newQuantity < 1) return;
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_API_URL}/update`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId: _id, quantity: newQuantity }),
      });
      if (!response.ok) {
        throw new Error('Failed to update item quantity');
      }
      const data = await response.json();
      setCartItems(data.items);
    } catch (error) {
      console.error("Failed to update item quantity:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to clear the entire cart via API
  const clearCart = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${BACKEND_API_URL}/clear`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to clear cart');
      }
      const data = await response.json();
      setCartItems(data.items);
    } catch (error) {
      console.error("Failed to clear cart:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading cart...</div>;
  }

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
