import React from 'react';
import './cart.css';

const CartSection = ({ isVisible, onClose, items }) => {
  const cartItems = items || [];
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={`cart-section ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>Cart</h2>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>Rs. {item.price}</p>
            </div>
          ))
        )}
      </div>
      <div className="cart-footer">
        <p>Total: Rs. {totalPrice}</p>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartSection;