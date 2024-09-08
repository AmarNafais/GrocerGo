import React, { useState } from 'react';
import Banner from '../Components/Banner/banner';
import Categories from '../Components/Categories/categories';
import AdvertisementBanner from '../Components/AdBanner/adbanner';
import Offers from '../Components/Offers/offers';
import CartSection from '../Components/Cart/cart';
import { FaShoppingCart } from 'react-icons/fa';

const Dashboard = () => {
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
      <Banner />
      <Categories />
      <AdvertisementBanner />
      <Offers onAddToCart={addToCart} />
      <CartSection isVisible={cartVisible} onClose={toggleCart} items={cartItems} />
      {/* <button onClick={toggleCart} className="cart-icon-btn">
        <FaShoppingCart />
      </button> */}
    </div>
  );
};

export default Dashboard;