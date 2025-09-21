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
    <div className="cart-page">
      
      <h1 className='text-5xl text-center'>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <div className="empty-cart-message">
          <p className='text-2xl text-center my-1'>Your cart is empty.</p>
          <Link to="/shop" className='flex items-center justify-center'>
            <button className="back-to-shop-btn font-bold text-2xl text-center">Go to Shop</button>
          </Link>
        </div>
      ) : (
        <div className="cart-content">
          <div className="cart-items-list">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart-summary font-bold text-[16px] gap-7 ml-3 mt-3">
            <h2 className='text-[19px]'>Cart Total</h2>
            <div className="subtotal-row flex gap-2">
              <p>Subtotal:</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <div className="shipping-row flex gap-2">
              <p>Shipping:</p>
              <p>Free</p>
            </div>
            <div className="total-row flex gap-2">
              <h3>Total:</h3>
              <h3>${subtotal.toFixed(2)}</h3>
            </div>
            <Link to="/checkout" className='flex'>
              <button className="checkout-btn flex gap-2">Proceed to Checkout <img width={20} src="right_icon.png" alt="" /></button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;