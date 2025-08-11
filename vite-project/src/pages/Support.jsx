import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './support.css';

const Support = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact-support');
  };

  const NazadClick = () => {
    navigate('/');
  };

  return (
    <div className="support-page">
      <div className="support-content">
        <h1 className="support-title">We’re here to help</h1>
        <p className="support-subtitle">
          Find answers to your questions, explore guides, and contact our support team anytime.
        </p>

        <div className="support-grid">
          <Link to="/support/getting-started" className="support-card-link">
            <div className="support-card">
              <h2> Getting Started</h2>
              <p>Set up your account and start accepting payments in just minutes.</p>
            </div>
          </Link>

          <Link to="/support/payments-billing" className="support-card-link">
            <div className="support-card">
              <h2> Payments & Billing</h2>
              <p>Everything you need to know about managing payments and subscriptions.</p>
            </div>
          </Link>

          <Link to="/support/technical-help" className="support-card-link">
            <div className="support-card">
              <h2> Technical Help</h2>
              <p>Get help with integration, APIs, and developer documentation.</p>
            </div>
          </Link>
        </div>

        <div className="support-actions">
          <button className="contact-btn" onClick={handleContactClick}>
             Contact Support
          </button>
          <button className="back-btn" onClick={NazadClick}>
            ← Ortga qaytish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Support;
