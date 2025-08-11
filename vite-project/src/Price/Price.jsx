import React from "react";
import "./Price.css";

export default function Pricing() {
  const handleClick = () => {
    alert("Hozircha Ishlamayapti (Biz buning ustidan ishlayapmiz)");
  };

  return (
    <div className="pricing-page">
      <h1 className="pricing-title">Our Pricing Plans</h1>
      <p className="pricing-subtitle">
        Choose the plan that fits your needs. No hidden fees, cancel anytime.
      </p>

      <div className="pricing-cards">
        <div className="pricing-card">
          <h2>Basic</h2>
          <p className="price">$9<span>/month</span></p>
          <ul>
            <li> Access to basic features</li>
            <li> Email support</li>
            <li> 5GB storage</li>
          </ul>
          <button className="btn" onClick={handleClick}>Choose Basic</button>
        </div>

        <div className="pricing-card featured">
          <h2>Pro</h2>
          <p className="price">$29<span>/month</span></p>
          <ul>
            <li> All Basic features</li>
            <li> Priority support</li>
            <li> 50GB storage</li>
          </ul>
          <button className="btn" onClick={handleClick}>Choose Pro</button>
        </div>

        <div className="pricing-card">
          <h2>Enterprise</h2>
          <p className="price">$99<span>/month</span></p>
          <ul>
            <li> All Pro features</li>
            <li> Dedicated account manager</li>
            <li> Unlimited storage</li>
          </ul>
          <button className="btn" onClick={handleClick}>Choose Enterprise</button>
        </div>
      </div>
    </div>
  );
}
