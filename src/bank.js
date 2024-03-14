import React from 'react';
import './bankContent.css'; 


function BankContent() {
  return (
    <div className="bank-content">
      <h1>Welcome to A-Z Bank</h1>
      <div className="services">
        <h2>Our Services</h2>
        </div>
        <div>
        <ul>
          <li>Personal Banking</li>
          <li>Business Banking</li>
          <li>Loans and Mortgages</li>
          <li>Investment Services</li>
        </ul>
      </div>
      <div className="account-types">
        <h2>Account Types</h2>
        </div>
        <div>
        <ul>
          <li>Savings Account</li>
          <li>Checking Account</li>
          <li>Business Account</li>
          <li>Fixed Deposit Account</li>
        </ul>
      </div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        </div>
        <div>
        <p>Phone: 123-456-7890</p>
        <p>Email: info@ourbank.com</p>
      </div>
    </div>
  );
}

export default BankContent;
