import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const token = process.env.JWT_SECRET;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        const data = await response.json();
        localStorage.setItem(`${token}`, data.token);
        alert('User logged in successfully!');
        navigate('/bookingcar');
      } else {
        throw new Error(`Request failed with status ${response.status}`);
      }
    } catch (err) {
      console.log('err', err);
      alert('Failed to log in user.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="login">
      <div className="login-container">
        <h1>MEMBER LOGIN</h1>

        <form className="login-form">
          <input
            type="text"
            placeholder="Enter your Username"
            name="username"
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
            onChange={handleChange}
          />

          <br />
          <br />
          <button onClick={handleSubmit} className="loginbtn" type="submit">
            LOGIN
          </button>
          <br />
          <br />
          <a href="/register">New User?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;

