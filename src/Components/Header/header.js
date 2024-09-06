import React, { useState } from 'react';
import './header.css';
import LogoImage from '../../Assets/Images/logo-img.png';
import { FaSearch, FaMapMarkerAlt, FaUser, FaShoppingCart } from 'react-icons/fa';
import { BsChevronDown } from 'react-icons/bs'; // For dropdown arrow

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="top-bar">
        <div className="logo">
          <img src={LogoImage} alt="Grocery Store Logo" />
          <h1>GrocerGo</h1>
        </div>
        <form className="search-form">
          <FaSearch className='icons'/>
          <input
            type="text"
            placeholder="Search"
            className="search-input"
          />
        </form>
        <div className="icon-container">
          <FaMapMarkerAlt className='icons'/>
          <div className="delivery-text">
            <h3>Deliver to</h3>
            <p>Your Address Here</p>
          </div>
          <a href="/login">
            <FaUser className='icons'/>
            <span>Login & Register</span>
          </a>
          <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
              <img src="/path/to/selected-flag.png" alt="Selected Country Flag" />
              <BsChevronDown className='icons'/>
            </button>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <a href="#">
                  <img src="/path/to/flag1.png" alt="Flag 1" /> English
                </a>
                <a href="#">
                  <img src="/path/to/flag2.png" alt="Flag 2" /> Spanish
                </a>
                {/* Add more flags and languages as needed */}
              </div>
            )}
          </div>
          <FaShoppingCart className='icons'/>
        </div>
      </div>
      <nav className="navigation">
        <a href="/">All Categories</a>
        <a href="/freshfood">Fresh Food</a>
        <a href="/fruits&veg">Fruits & Vegetables</a>
        <a href="/beverages">Beverages</a>
        <a href="/babyproducts">Baby Products</a>
        <a href="/devices">Smartphones, Tablets & Wearables</a>
        <a href="/electronics">Electronics & Appliances</a>
      </nav>
    </header>
  );
};

export default Header;
