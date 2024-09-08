import React from 'react';
import './footer.css';
import LogoImage from '../../Assets/Images/logo-img.png';
import AppStore from '../../Assets/Images/appStore.svg';
import GooglePlay from '../../Assets/Images/googlePlayLogo.svg';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const Footer = () => (
  <footer className="footer">
    <button className="back-to-top" onClick={scrollToTop}>
      BACK TO TOP
    </button>
    <div className="footer-container">
      <div className="footer-logo-section">
        <img src={LogoImage} alt="Grocery Store Logo" className="footer-logo" />
        <h1>GrocerGo</h1>
        <p>Stay in touch with us</p>
        <div className="social-media-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </div>
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Service and Warranty</a></li>
            <li><a href="#">Returns and Exchanges</a></li>
            <li><a href="#">Payment</a></li>
            <li><a href="#">Shipping & Delivery</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>About Us</h4>
          <ul>
            <li><a href="#">About GrocerGo</a></li>
            <li><a href="#">Our Brands</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press Releases</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Help & Support</h4>
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Download Our App</h4>
          <div className="app-links">
            <a href="#"><img src={AppStore} alt="App Store" /></a>
            <a href="#"><img src={GooglePlay} alt="Google Play" /></a>
          </div>
        </div>
      </div>
    </div>
    <p>© 2024 GrocerGo. All rights reserved.</p>
  </footer>
);

export default Footer;
