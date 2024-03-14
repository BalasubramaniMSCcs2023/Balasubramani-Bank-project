import React, { useState, useEffect } from 'react';
import backgroundImage from './13.jpg'; 

function DepositPage({ handleLogout }) {
  const [transactionAmount, setTransactionAmount] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedBalance = localStorage.getItem('balance');
    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }
  }, []);

  const handleDeposit = (amount) => {
    const depositAmount = parseFloat(amount);
    const newBalance = balance + depositAmount;
    const transaction = { type: 'deposit', amount: depositAmount, balance: newBalance, name };
    setBalance(newBalance);
    setTransactions(prevTransactions => [...prevTransactions, transaction]);
    localStorage.setItem('balance', newBalance.toString());
    alert(`Successfully deposited $${depositAmount}`);
  };

  const deposit = () => {
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      handleDeposit(transactionAmount);
      setTransactionAmount('');
    } else {
      alert('Please enter a valid amount for deposit.');
    }
  };

  return (
    <div className="signup-page" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      width: '100vw',  
      height: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="signup-form" style={{ 
        backgroundColor: 'rgba(555, 555, 555, 0.3)', 
        padding: '20px',
        width:'18vw',
        height:'40vh',
        border:'3px solid cyan',
        borderRadius: '18px',
      }}>
        <h1>Name: {name}</h1>
        <h2>Balance: ${balance}</h2>
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ width: '99%', padding: '10px', marginBottom: '10px', border: '3px solid black', borderRadius: '9px' }}
        />
       
        <button onClick={deposit} style={{ width: '100%', padding: '10px', marginTop: '10px', border: '3px solid black', marginRight:'-1px',borderRadius: '9px', backgroundColor: 'black', color: '#fff', cursor: 'pointer' }}>Deposit</button>
      </div>
    </div>
  );
}

export default DepositPage;
