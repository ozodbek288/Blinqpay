import React from "react";
import { X } from "lucide-react";
import "./CartSidebar.css";
import { useCart } from "./CartContext";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>

      {isOpen && <div className="cart-overlay" onClick={onClose}></div>}

      <div className={`cart-sidebar ${isOpen ? "open" : ""}`}>
        <div className="cart-header">
          <h2> Shopping Cart</h2>
          <button className="close-btn" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty">Your cart is empty</p>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-info">
                  <h4>{item.name}</h4>
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>-</button>
                    <span>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)}>+</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart-footer">
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
