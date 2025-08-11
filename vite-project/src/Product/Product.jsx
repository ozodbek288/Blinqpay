
import React from 'react';
import './Product.css';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();

  const ProductOne = () => {
    navigate('/ProductCard');
  };

  const ProductTwo = () => {
    navigate('/ProductTwo');
  };

  const ProductThree = () => {
    navigate('/ProductThree');
  };


  return (
    <div className="products-page">
      <header className="products-header">
        <h1>Our Products</h1>
        <p>Discover our innovative solutions designed to help your business grow.</p>
      </header>

      <section className="products-section">
        <button onClick={ProductOne}>
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white w-72 h-56 p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-3">Product One</h2>
          <p className="opacity-90 text-center">High-performance solution for small businesses.</p>
        </div>
        </button>

        <button onClick={ProductTwo}>
          <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white w-72 h-56 p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-3">Product Two</h2>
          <p className="opacity-90 text-center">Smart analytics for better decision making.</p>
        </div>
        </button>

       <button onClick={ProductThree}>
         <div className="bg-gradient-to-br from-purple-500 to-blue-500 text-white w-72 h-56 p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300">
          <h2 className="text-2xl font-bold mb-3">Product Three</h2>
          <p className="opacity-90 text-center">Secure payment processing for all sizes.</p>
        </div>
       </button>
      </section>

      <footer className="products-footer">
        <p>© 2025 Blinqpay. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Product;
