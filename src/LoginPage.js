import React, { useState } from 'react';
import Deposit from './Deposit.js'; 
import backgroundImage from './3.jpg'; 


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === 'user123' && password === 'pass123') {
      alert('Login successful!');
      setIsLoggedIn(true);
    } else {
      setErrorMessage('Invalid username or password. Please try again.');
      setPassword('');
    }
  };

  if (isLoggedIn) {
    return <Deposit />;
  }

  return (
    <div className="Login-page" style={{ 
      backgroundImage: `url(${backgroundImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      width: '100vw',  
      height: '100vh', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div className="Login-form" style={{ 
         backgroundColor: 'rgba(555, 555, 555, 0.3)', 
         padding: '25px',
         width:'18vw',
         height:'45vh',
         border:'4px solid cyan',
         borderRadius: '18px',
      }}>
      <div className=""
      ></div>
        <div className="login-container">
          <h2>Login to A-Z Account</h2>
          <form onSubmit={handleSubmit} id="login-form">
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
