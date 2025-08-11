import React from 'react';
import './ManageInvoicing.css';
import { useNavigate } from 'react-router-dom';

const ManageInvoicing = () => {

     const navigate = useNavigate();

      const Developmentinprogress = () => {
        navigate('/Progress');
    };

  return (
    <div className="invoice-page">
      <header className="invoice-header">
        <h1>Manage Invoicing</h1>
        <p>Now track all of your transactions easily and efficiently.</p>
      </header>

      <section className="invoice-section">
        <h2> Overview</h2>
        <p>
          Our invoicing system allows you to create, send, and track invoices
          with ease. You can monitor payment statuses in real-time, manage
          clients, and get insights into your cash flow.
        </p>
      </section>

      <section className="invoice-section">
        <h2> Features</h2>
        <ul>
          <li>Create and customize invoices</li>
          <li>Track payments in real-time</li>
          <li>Send automated reminders</li>
          <li>Export invoices as PDF</li>
          <li>Securely store client data</li>
        </ul>
      </section>

      <section className="invoice-section">
        <h2> How to Get Started</h2>
        <ol>
          <li>Go to the "Invoices" tab in your dashboard</li>
          <li>Click "Create New Invoice"</li>
          <li>Fill in client and payment details</li>
          <li>Save and send via email or download</li>
        </ol>
      </section>

      <section className="invoice-section">
        <h2> Tips for Better Invoicing</h2>
        <p>
          Always set clear payment terms, follow up with reminders, and keep
          records for your accounting. Consistency in invoicing improves cash
          flow and client relationships.
        </p>
      </section>

      <footer className="invoice-footer">
        <button onClick={Developmentinprogress} className="cta-btn">Create New Invoice</button>
        <button onClick={Developmentinprogress} className="secondary-btn">View All Invoices</button>
      </footer>
    </div>
  );
};

export default ManageInvoicing;
