import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Footer from './Components/footer';
import Dashboard from './Pages/dashboard';
import ProductPage from './Pages/productpage';
import LoginPage from './Pages/loginpage/loginpage';


function App() {
  return (
    <Router>
      <Header />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;