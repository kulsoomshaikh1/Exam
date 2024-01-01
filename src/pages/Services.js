// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-container">
      <div className="service-card">
        <h3>Free Shipping</h3>
        <p>Enjoy free shipping on all orders on all order above $100.</p>
      </div>
      <div className="service-card">
        <h3>Support 24/7</h3>
        <p>Our customer support team is available 24/7 to help you for queries.</p>
      </div>
      <div className="service-card">
        <h3>30 Days Return</h3>
        <p>Simply return it within 30 days for an exchange.</p>
      </div>
      <div className="service-card">
        <h3>100% Payment Secure</h3>
        <p>Our payment are secured with 256 bit encryption.</p>
      </div>
    </div>
  );
};

export default Services;
