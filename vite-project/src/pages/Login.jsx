import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate('/homeapp'); 
  };

  return (
    <div className="login-page">
      <div className="login-overlay">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <p>Please sign in to continue</p>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
