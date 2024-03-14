import React, { useState } from 'react';
import backgroundImage from './2.jpg';

const SignUpPage = ({ handleSignUp }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = () => {
    setError('');
    setSuccessMessage('');

    if (!username.match(/^[a-zA-Z]+$/)) {
      setError('Invalid username. Only letters are allowed.');
      return;
    }

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
      setError('Invalid email format.');
      return;
    }

    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      setError('All fields are required.');
      return;
    }

    const userData = { username, email, password };
    handleSignUp(userData);
    setSuccessMessage('Sign up successful.');
   
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
        backgroundColor: 'rgba(255, 255, 255, 0.3)', 
        padding: '20px',
        width: '80%', 
        maxWidth: '40vh', 
        border: '4px solid cyan',
        borderRadius: '12px',
        textAlign: 'center', 
      }}>
        <h2>Welcome to A-Z Bank</h2>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Sign Up</button>
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p className="success-message" style={{ color: 'green' }}>{successMessage}</p>}
      </div>
    </div>
  );
};

export default SignUpPage;