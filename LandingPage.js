import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="company-name">GreenLeaf Plants</h1>
        <p className="company-description">
          Welcome to GreenLeaf Plants, your premier destination for beautiful, healthy houseplants. 
          We specialize in providing a wide variety of indoor plants that purify your air, 
          enhance your decor, and bring nature indoors. Our expert team carefully selects 
          each plant to ensure it meets our high standards for quality and health. 
          Whether you're a seasoned plant parent or just starting your green journey, 
          we have the perfect plant for your home or office.
        </p>
        <Link to="/products" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;