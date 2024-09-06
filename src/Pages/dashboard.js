import React from 'react';
import { Link } from 'react-router-dom';
import HomePage from './homepage';

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <HomePage />
    <Link to="/login">
      <button className="login-btn">Go to Login</button>
    </Link>
  </div>
);

export default Dashboard;