import React from 'react';
import './header.css';
import LogoImage from '../../Assets/Images/logo-img.png';
import { FaSearch, FaMapMarkerAlt, FaUser, FaShoppingCart } from 'react-icons/fa';
import CartSection from '../Cart/cart';

const Header = ({ onToggleCart, cartItems, cartVisible }) => {
  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="logo">
            <img src={LogoImage} alt="Grocery Store Logo" />
            <h1>GrocerGo</h1>
          </div>
          <form className="search-form">
            <FaSearch className="icons" />
            <input type="text" placeholder="Search" className="search-input" />
          </form>
          <div className="icon-container">
            <FaMapMarkerAlt className="icons" />
            <div className="delivery-text">
              <h3>Deliver to</h3>
              <p>Your Address Here</p>
            </div>
            <a href="/login">
              <FaUser className="icons" />
              <span>Login & Register</span>
            </a>
            <FaShoppingCart className="icons" onClick={onToggleCart} />
          </div>
        </div>
        <nav className="navigation">
          <a href="/">All Categories</a>
          <a href="/freshfood">Fresh Food</a>
          <a href="/fruits&veg">Confectionary</a>
          <a href="/beverages">Crisps and Snacks</a>
          <a href="/babyproducts">Drinks</a>
          <a href="/devices">Household</a>
          <a href="/electronics">Personal Care</a>
          <a href="/electronics">Baby & Toddler</a>
          <a href="/electronics">Pets</a>
        </nav>
      </header>

      {/* Always render CartSection and control visibility via the 'visible' class */}
      <CartSection isVisible={cartVisible} items={cartItems} />
    </>
  );
};

export default Header;
