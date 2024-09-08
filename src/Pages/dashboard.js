import React, { useState } from 'react';
import Banner from '../Components/Banner/banner';
import Categories from '../Components/Categories/categories';
import AdvertisementBanner from '../Components/AdBanner/adbanner';
import Offers from '../Components/Offers/offers';

const Dashboard = ({ onAddToCart }) => {
  return (
    <div>
      <Banner />
      <Categories />
      <AdvertisementBanner />
      <Offers onAddToCart={onAddToCart} />
    </div>
  );
};

export default Dashboard;
