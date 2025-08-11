import React from 'react';
import './wDetailLearnMore.css';

const CashflowVisibility = () => {
  return (
    <div className="cashflow-page">
      <header className="hero-section">
        <h1>Cashflow Visibility</h1>
        <p>
          Gain complete insight into your business finances with our
          real-time tracking tools and analytics dashboard.
        </p>
      </header>

      <section className="content-section">
        <div className="content-block">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2936/2936635.png"
            alt="Analytics"
          />
          <div>
            <h2>Real-Time Analytics</h2>
            <p>
              Get up-to-date financial metrics and insights that help you
              make better decisions instantly.
            </p>
          </div>
        </div>

        <div className="content-block reverse">
          <div>
            <h2>Forecasting Made Easy</h2>
            <p>
              Plan your growth with our forecasting tools that use
              historical data to predict future trends.
            </p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4149/4149644.png"
            alt="Forecast"
          />
        </div>

        <div className="content-block">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="Team Collaboration"
          />
          <div>
            <h2>Collaborate With Your Team</h2>
            <p>
              Share reports and insights with your team to keep everyone
              informed and aligned.
            </p>
          </div>
        </div>

        <div className="content-block reverse">
          <div>
            <h2>Automated Reports</h2>
            <p>
              Receive scheduled financial reports automatically in your
              inbox, so you can focus on what matters most.
            </p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png"
            alt="Automated Reports"
          />
        </div>
      </section>
    </div>
  );
};

export default CashflowVisibility;
