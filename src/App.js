import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Dashboard from './Pages/dashboard';
import ProductPage from './Pages/productpage';
import LoginPage from './Components/Login/loginpage';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const toggleCart = () => {
    setCartVisible(prev => !prev);
  };

  const addToCart = (item) => {
    setCartItems(prevItems => [...prevItems, item]);
  };

  return (
    <Router>
      <Header onToggleCart={toggleCart} cartItems={cartItems} cartVisible={cartVisible} />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard onAddToCart={addToCart} />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
