import React from 'react';
import './cart.css';

const CartSection = ({ isVisible, items, onClose }) => {
  return (
    <div className={`cart-section ${isVisible ? 'visible' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <div className="cart-content">
        {items.length > 0 ? (
          items.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            </div>
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
      </div>
      <div className="cart-footer">
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartSection;
