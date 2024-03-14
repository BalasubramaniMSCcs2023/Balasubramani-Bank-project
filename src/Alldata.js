import React, { useState } from 'react';
import './alldata.css';

function AllData({ users }) {
  const [updatedUsers, setUpdatedUsers] = useState(users);

  const handleDeposit = (id, amount) => {
    const updatedUser = updatedUsers.find(user => user.id === id);
    if (updatedUser) {
      updatedUser.balance += amount;
      updatedUser.depositAmount = (updatedUser.depositAmount || 0) + amount;
      updatedUser.depositTime = new Date().toLocaleString();
      setUpdatedUsers([...updatedUsers]);
    }
  };

  const handleWithdrawal = (id, amount) => {
    const updatedUser = updatedUsers.find(user => user.id === id);
    if (updatedUser && updatedUser.balance >= amount) {
      updatedUser.balance -= amount;
      updatedUser.withdrawAmount = (updatedUser.withdrawAmount || 0) + amount;
      updatedUser.withdrawalTime = new Date().toLocaleString();
      setUpdatedUsers([...updatedUsers]);
    } else {
      alert('Insufficient balance or user not found');
    }
  };

  const handleLogin = (id) => {
    const updatedUser = updatedUsers.find(user => user.id === id);
    if (updatedUser) {
      updatedUser.loginTime = new Date().toLocaleString();
      setUpdatedUsers([...updatedUsers]);
    }
  };

  return (
    <div className="all-data-page">
      <h1>All User Data</h1>
      <ul>
        {updatedUsers.map(user => (
          <li key={user.id}>
            <strong>Username:</strong> {user.username}, 
            <strong> Account Type:</strong> {user.accountType}, 
            <strong> Balance:</strong> {user.balance},
            <strong> Login Time:</strong> {user.loginTime || 'Never'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllData;