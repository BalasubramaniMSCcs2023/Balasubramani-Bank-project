import React from 'react';

const TransactionHistoryPage = ({ transactionHistory }) => {
  return (
    <div className="transaction-history">
      <h3>Transaction History</h3>
      <ul>
        {transactionHistory.map((transaction, index) => (
          <li key={index}>
            {transaction.type === 'deposit' ? 'Deposit' : 'Withdrawal'} of ${transaction.amount.toFixed(2)} by {transaction.name} - Balance: ${transaction.balance.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistoryPage;
