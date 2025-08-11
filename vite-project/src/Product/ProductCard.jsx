import React, { useState } from "react";
import "./ProductCard.css";
import Colobaration from "../assets/collaboration-project-vector.jpg";
import { useCart } from "../components/CartContext";
import CartSidebar from "../components/CartSidebar";

export default function ProductCard() {
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);

  const products = [
    {
      id: 1,
      name: "Product One",
      price: 49,
      description: "High-performance solution for small businesses.",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800",
    },
    {
      id: 2,
      name: "Product Two",
      price: 99,
      description: "Scalable platform for enterprise-level companies.",
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800",
    },
    {
      id: 3,
      name: "Product Three",
      price: 29,
      description: "Cloud-based service with real-time analytics.",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800",
    },
    {
      id: 4,
      name: "Product Four",
      price: 59,
      description: "All-in-one marketing automation tool.",
      image:
        "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800",
    },
    {
      id: 5,
      name: "Product Five",
      price: 79,
      description: "E-commerce management system.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?q=80&w=800",
    },
    {
      id: 6,
      name: "Product Six",
      price: 39,
      description: "Project collaboration platform.",
      image: Colobaration,
    },
  ];

  const handleBuyNow = (product) => {
    addToCart(product);
    setIsCartOpen(true);
  };

  return (
    <>
      <div className="ProductCard">
        <div className="container">
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card"> 
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-info">
                  <h2>{product.name}</h2>
                  <p>{product.description}</p>
                  <div className="product-footer">
                    <span className="price">${product.price}/month</span>
                    <button
                      className="buy-btn"
                      onClick={() => handleBuyNow(product)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
