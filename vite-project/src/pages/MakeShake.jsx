import React from "react";

import { Link } from "react-router-dom";import "./MakeShake.css";

export default function PaymentsCommunity() {
  return (
    <div className="payments-container">
      <header className="payments-header">
        <h1>Make & Share Payments With Community</h1>
        <p>
          Easily send, receive, and manage payments with your community members.
          Stay connected and keep your transactions transparent, fast, and secure.
        </p>
      </header>

      <section className="payments-section">
        <div className="payment-card">
          <h2>Fast Transfers</h2>
          <p>
            Send payments instantly without any delays. Our secure system ensures
            your transactions are safe and quick.
          </p>
        </div>
        <div className="payment-card">
          <h2>Community Wallet</h2>
          <p>
            Keep track of shared expenses and contributions within your community
            in one place.
          </p>
        </div>
        <div className="payment-card">
          <h2>Detailed Reports</h2>
          <p>
            Get transparent transaction histories with easy-to-read charts and
            summaries.
          </p>
        </div>
      </section>

      <section className="cta-section">
        <Link to={'/Progress'}><button className="cta-btn">Get Started</button></Link>
        <Link to={'/Progress'}><button className="cta-btn secondary">Learn More</button></Link>
      </section>
    </div>
  );
}
