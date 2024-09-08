import React from 'react';
import './cart.css';

const CartSection = ({ isVisible, items, onClose }) => {
  const calculateTotal = () => {
    return items.reduce((total, item) => total + item.price, 0);
  };

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
        <span className="total-price">Total: Rs. {calculateTotal()}</span>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default CartSection;
