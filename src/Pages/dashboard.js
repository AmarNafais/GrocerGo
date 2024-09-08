import React, { useState } from 'react';
import Banner from '../Components/Banner/banner';
import Categories from '../Components/Categories/categories';
import AdvertisementBanner from '../Components/AdBanner/adbanner';
import Offers from '../Components/Offers/offers';
import CartSection from '../Components/Cart/cart';

const Dashboard = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);

  const handleAddToCart = (offer) => {
    setCartItems((prevItems) => [...prevItems, offer]);
    setCartVisible(true);
  };

  return (
    <div>
      <Banner />
      <Categories />
      <AdvertisementBanner />
      <Offers onAddToCart={handleAddToCart} />
      <CartSection isVisible={cartVisible} onClose={() => setCartVisible(false)} items={cartItems} />
    </div>
  );
};

export default Dashboard;
