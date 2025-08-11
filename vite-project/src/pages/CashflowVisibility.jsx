import React from "react";
import "./Cashflow.css";
import { useNavigate } from 'react-router-dom';

const CashflowDetailLearPage = () => {
        const navigate = useNavigate();

  const LearnMore = () => {
    navigate('/CashflowDetailLearnPage');
  };

  return (
    <div className="cf-container">

      <section className="cf-header">
        <h1>Cashflow Visibility</h1>
        <p>
          Gain clear insights into your business finances with our powerful tools.
          Track, forecast, and optimize your cashflow with ease.
        </p>
      </section>


      <section className="cf-section">
        <h2>Why It Matters</h2>
        <p>
          Many businesses struggle because they don’t have a clear picture of their cashflow.
          This can lead to unexpected shortages, missed opportunities, and unnecessary stress.
          With proper cashflow visibility, you can spot trends early, prepare for seasonal changes,
          and ensure your business stays financially healthy.
        </p>
      </section>


      <section className="cf-section cf-benefits">
        <h2>Key Benefits</h2>
        <div className="cf-grid">
          {[
            "Real-time tracking of income and expenses",
            "Forecasting tools for better financial planning",
            "Custom reports to suit your business needs",
            "Easy integration with accounting software",
          ].map((benefit, i) => (
            <div key={i} className="cf-card">
              <h3>Benefit {i + 1}</h3>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </section>


      <section className="cf-section">
        <h2>How We Help</h2>
        <p>
          Our platform offers intuitive dashboards, interactive charts, and automated reporting
          to keep you informed at all times. You can filter data by date, category, or department,
          and receive alerts if something unusual happens with your cashflow.
        </p>
        <blockquote>
          "Good cashflow management is the backbone of a successful business. Without it, even profitable companies can fail."
        </blockquote>
      </section>


      <section className="cf-cta">
        <h2>Get Started Today</h2>
        <p>
          Sign up today and take control of your finances. Whether you’re a startup or an
          established enterprise, our tools will give you the clarity you need to grow with confidence.
        </p>
        <div className="cf-btn-group">
          <button onClick={LearnMore} className="btn-primary">Start Tracking Now</button>
          <button onClick={LearnMore} className="btn-secondary">Learn More</button>
        </div>
      </section>


      <section className="cf-section">
        <h2>Additional Features</h2>
        <ul>
          <li> Automated invoicing and reminders</li>
          <li> Multi-currency support</li>
          <li> Secure data encryption</li>
          <li> API integration with popular business tools</li>
          <li> Mobile-friendly access from anywhere</li>
        </ul>
      </section>
    </div>
  );
};

export default CashflowDetailLearPage;
