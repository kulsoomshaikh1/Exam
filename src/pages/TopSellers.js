// TopSellers.js
import React from 'react';
import './TopSellers.css';

const TopSellers = () => {
  const products = [
    { id: 1, name: 'gray polo Shirt', price: '$29.00', image: 'image1.png' },
    { id: 2, name: 'Casual Blue Shirt', price: '$34.99', image: 'image2.png' },
    { id: 3, name: 'Striped Polo Shirt', price: '$27.99', image: '3.png' },
    { id: 4, name: 'Denim Button-Up Shirt', price: '$39.99', image: '4.png' },
  ];

  return (
    <div className="top-sellers-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <div className="product-details">
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <button>Shop Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSellers;
