import React, { useState } from 'react';
import backgroundImage from './8.jpg'; 

function TransactionPage({ handleLogout }) {
  const [transactionAmount, setTransactionAmount] = useState('');
  const [name, setName] = useState('');
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);

  const handleDeposit = (amount) => {
    const newBalance = balance + parseFloat(amount);
    const transaction = { type: 'deposit', amount: parseFloat(amount), balance: newBalance, name };
    setBalance(newBalance);
    setTransactions([...transactions, transaction]);
    alert(`Successfully deposited $${amount}`);
  };

  const handleWithdraw = (amount) => {
    if (balance >= amount) {
      const newBalance = balance - parseFloat(amount);
      const transaction = { type: 'withdrawal', amount: parseFloat(amount), balance: newBalance, name };
      setBalance(newBalance);
      setTransactions([...transactions, transaction]);
      alert(`Successfully withdrew $${amount}`);
    } else {
      alert('Insufficient balance.');
    }
  };

  const deposit = () => {
    if (!isNaN(transactionAmount) && transactionAmount > 0) {
      handleDeposit(transactionAmount);
      setTransactionAmount('');
    } else {
      alert('Please enter a valid amount for deposit.');
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

  return (
    <div className="signup-page" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      width: '100vw',  
      height: '150vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="signup-form" style={{ 
        backgroundColor: 'linear-gradient(blue,red)', 
        padding: '20px',
        borderRadius: '10px',
      }}>
        <h2>Balance: ${balance}</h2>
        <input
          type="number"
          value={transactionAmount}
          onChange={(e) => setTransactionAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '5px' }}
        />
       
        <button onClick={deposit} style={{ width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'green', color: '#fff', cursor: 'pointer' }}>Deposit</button>
        <button onClick={withdraw} style={{ width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Withdraw</button>
        <button onClick={handleLogout} style={{ width: '100%', padding: '10px', marginTop: '10px', border: 'none', borderRadius: '5px', backgroundColor: 'red', color: '#fff', cursor: 'pointer' }}>Logout</button>
        <div style={{ marginTop: '20px', maxWidth: '400px', width: '100%', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
          <h3>Transaction History</h3>
          <ul>
            {transactions.map((transaction, index) => (
              <li key={index}>
                {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'} of ${transaction.amount} by {transaction.name} - Balance: ${transaction.balance}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TransactionPage;
