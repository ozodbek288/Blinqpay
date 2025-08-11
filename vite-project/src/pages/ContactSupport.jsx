import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ContactSupport.css';

const ContactSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-support-container">
      <div className="loading-overlay">
        <div className="loading-text">
          Идет Разработка
        </div>
      </div>

      <button onClick={() => navigate(-1)} className="back-button">
        ← Ortga
      </button>


      <div className="chat-box">
        <h1>Live Chat</h1>
        <div className="chat-window">
          <p className="bot-msg">Salom! Yordam kerakmi?</p>
        </div>
        <input
          type="text"
          placeholder="Xabar yozing..."
          className="chat-input"
          disabled
        />
      </div>
    </div>
  );
};

export default ContactSupport;
