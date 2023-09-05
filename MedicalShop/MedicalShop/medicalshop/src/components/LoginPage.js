import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from './Service/api';

const containerStyle = {
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `url('https://images.unsplash.com/photo-1512678080530-7760d81faba6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWwlMjByb29tfGVufDB8fDB8fHww&w=1000&q=80') no-repeat center center fixed`,
  backgroundSize: 'cover',
};

const formContainerStyle = {
  background: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
  padding: '16px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const inputStyle = {
  width: '100%',
  border: '1px solid #ff0000', // Red border by default
  borderRadius: '4px',
  padding: '8px 12px',
  marginBottom: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s ease',
};

const inputValidStyle = {
  borderColor: '#00ff00', // Green border when input is valid
};

const buttonStyle = {
  width: '100%',
  backgroundColor: '#3490dc',
  color: '#ffffff',
  padding: '12px',
  borderRadius: '4px',
  border: 'none',
  cursor: 'pointer',
};

const LoginPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
    getData({ username, password })
      .then((result) => {
        console.log(result);
        navigate('/home');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <div style={containerStyle}>
      <div style={formContainerStyle}>
        <h2
          style={{
            fontSize: '24px',
            fontWeight: '600',
            textAlign: 'center',
            marginBottom: '24px',
          }}
        >
          Online Medical Shop
        </h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '16px' }}>
            <label htmlFor="username" style={{ color: '#333' }}>
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              style={{
                ...inputStyle,
                ...(username ? inputValidStyle : {}), // Apply green border if username is not empty
              }}
              required
            />
          </div>
          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="password" style={{ color: '#333' }}>
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              style={{
                ...inputStyle,
                ...(password ? inputValidStyle : {}), // Apply green border if password is not empty
              }}
              required
            />
          </div>
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
        <div style={{ marginTop: '16px' }}>
          <p style={{ color: '#666', textAlign: 'center' }}>
            Don't have an account?{' '}
            <button
              onClick={handleSignup}
              style={{
                color: '#3490dc',
                textDecoration: 'underline',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                outline: 'none',
              }}
            >
              Sign Up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
