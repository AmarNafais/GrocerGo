import React, { useState } from 'react';
import Dashboard from '../Components/Dashboard/dashboard';
import Header from '../Components/Header/header';

const HomePage = () => {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartVisible(prev => !prev);
  };

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <div>
      <Dashboard onAddToCart={addToCart} />
    </div>
  );
};

export default HomePage;
