import React from 'react';
import './header.css';
import LogoImage from '../../Assets/Images/logo-img.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={LogoImage} alt="Grocery Store Logo" />
        <h1>GrocerGo</h1>
      </div>
      <nav className="navigation">
        <a href="/">Home</a>
        <a href="/shop">Shop</a>
        <a href="/about">About</a>
        <a href="/review">Review</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="cart-icons">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
        <a href="/login"><i className="fas fa-user"></i></a>
      </div>
    </header>
  );
};

export default Header;
