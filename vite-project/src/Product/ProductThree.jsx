import React, { useState } from "react";
import "./ProductCard.css";
import { useCart } from "../components/CartContext";
import CartSidebar from "../components/CartSidebar";
import Payment from '../assets/Payment.jpg'
import Support from '../assets/Support.webp'

export default function ProductCard() {
    const { addToCart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    const products = [
        { 
    id: 1, 
    name: "Product One", 
    description: "High-performance solution for small businesses.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=800"
  },
  { 
    id: 2, 
    name: "Product Two", 
    description: "Smart analytics for better decision making.",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800"
  },
  { 
    id: 3, 
    name: "Product Three", 
    description: "Secure payment processing for all sizes.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1556742504-16b083e4d7de?q=80&w=800"
  },
  { 
    id: 4, 
    name: "Product Four", 
    description: "AI-powered insights for rapid growth.",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e2bf?q=80&w=800"
  },
  { 
    id: 5, 
    name: "Product Five", 
    description: "Scalable cloud infrastructure solutions.",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800"
  },
  { 
    id: 6, 
    name: "Product Six", 
    description: "24/7 customer support and monitoring.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=800"
  }
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
