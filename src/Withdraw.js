import React, { useState, useEffect } from 'react';
import backgroundImage from './17.avif';

function WithdrawPage({ handleLogout }) {
  const [transactionAmount, setTransactionAmount] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const storedBalance = localStorage.getItem('balance');
    const storedTransactions = localStorage.getItem('transactions');
    const storedName = localStorage.getItem('name');

    if (storedBalance) {
      setBalance(parseFloat(storedBalance));
    }

    if (storedTransactions) {
      setTransactions(JSON.parse(storedTransactions));
    }

    if (storedName) {
      setName(storedName);
    }
  }, []);

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      const newBalance = balance - parseFloat(amount);
      const transaction = { type: 'withdrawal', amount: parseFloat(amount), balance: newBalance, name };
      setBalance(newBalance);
      setTransactions([...transactions, transaction]);
      localStorage.setItem('balance', newBalance);
      localStorage.setItem('transactions', JSON.stringify([...transactions, transaction]));
      alert(`Successfully withdrew $${amount}`);
    } else {
      alert('Insufficient balance.');
    }
  };

  const withdraw = () => {
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      handleWithdraw(transactionAmount);
      setTransactionAmount('');
    } else {
      alert('Please enter a valid amount for withdrawal.');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    localStorage.setItem('name', e.target.value);
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
        backgroundColor: 'rgba(455, 455, 455, 0.3)', 
        padding: '20px',
        height:'370px',
        border:'3px solid cyan',
        borderRadius: '12px',
      }}>
        <h1>Name: {name}</h1>
        <h2>Balance: ${balance}</h2>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '3px solid black', borderRadius: '5px' }}
        />
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '3px solid black', borderRadius: '5px' }}
        />
       
        <button onClick={withdraw} style={{ width: '100%', padding: '10px', marginTop: '10px', border: '3px solid black',marginLeft:'60px', borderRadius: '5px', backgroundColor:'black', color: '#fff', cursor: 'pointer' }}>Withdraw</button>
        <button onClick={handleLogout} style={{ width: '100%', padding: '10px', marginTop: '10px',marginLeft:'60px', border: '3px solid black', borderRadius: '5px', backgroundColor: 'black', color: '#fff', cursor: 'pointer' }}>Logout</button>
         
        </div>
      </div>
  );
}

export default WithdrawPage;
