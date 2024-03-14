import React, { useState } from 'react';
import './App.css'; 
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import Deposit from './Deposit'; 
import Withdraw from './Withdraw'; 
import BankPage from './bank'; 
import AllData from './Alldata';

const usersWithBankAccounts = [
    {
      id: 1,
      username: 'user1',
      accountType: 'savings',
      balance: 1000,
      depositAmount: 500,
      loginTime: '2023-03-14T12:34:56',
      depositTime: '2023-03-14T13:45:00',
      withdrawalTime: ''
    },
    {
      id: 2,
      username: 'user2',
      accountType: 'checking',
      balance: 2000,
      depositAmount: 1000,
      loginTime: '2023-03-14T10:15:22',
      depositTime: '',
      withdrawalTime: ''
    },
  ];

function HomePage() {
  const [currentPage, setCurrentPage] = useState('home');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSignUp = (username, password, accountType) => {
    if (usersWithBankAccounts.some(user => user.username === username)) {
      setError('Username is already taken.');
      return;
    }

    const newUser = {
      id: usersWithBankAccounts.length + 1,
      username: username,
      password: password,
      accountType: accountType,
      balance: 0
    };

    usersWithBankAccounts.push(newUser);
    setUserData(newUser);
    setCurrentPage('account');
  };

  const handleLogout = () => {
    setUserData(null);
    setCurrentPage('home');
  };

  const handleLogin = (username, password) => {
    const user = usersWithBankAccounts.find(
      user => user.username === username && user.password === password
    );

    if (user) {
      setUserData(user);
      setCurrentPage('account');
    } else {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="homepage">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item"><button onClick={() => setCurrentPage('bank')}>Bank</button></li>          
          <li className="navbar-item"><button onClick={() => setCurrentPage('home')}>Home</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('login')}>Login</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('deposit')}>Deposit</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('withdraw')}>Withdraw</button></li>
          <li className="navbar-item"><button onClick={() => setCurrentPage('alldata')}>Alldata</button></li>

        </ul>
      </nav>
      <div className="content">
        {currentPage === 'home' && (
          <div className="login-container bank"> 
            <SignUpPage handleSignUp={handleSignUp} />
          </div>
        )}
        {currentPage === 'bank' && (
          <div className="bank-container">
            <BankPage />
          </div> 
        )}
        {currentPage === 'login' && (
          <div className="login-container">
            <LoginPage onLogin={handleLogin} />
          </div>
        )}
        {currentPage === 'deposit' && (
          <Deposit handleLogout={handleLogout} />
        )}
        {currentPage === 'withdraw' && (
          <Withdraw handleLogout={handleLogout} />
        )}
        {currentPage === 'alldata' && usersWithBankAccounts && (
          <AllData users={usersWithBankAccounts} />
        )}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default HomePage;
