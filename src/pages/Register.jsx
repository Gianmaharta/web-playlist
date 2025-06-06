import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Tambahkan ini
import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import backgroundLogin from '../assets/backgroundLogin.png';

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    retypePassword: '',
    agree: false,
  });

  const navigate = useNavigate(); // Tambahkan ini

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle register logic here (misal validasi/register API)
    navigate('/'); // Redirect ke halaman login
  };

  return (
    <div
      className="login-flex-container"
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex', 'left': 0, 'top': 0,
        position: 'absolute',
        fontFamily: 'system-ui, sans-serif',
        background: '#fff',
        justifyContent: 'center',
        alignItems: 'stretch',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Left Side */}
      <div
        className="login-left"
        style={{
          flex: 1.4,
          minWidth: 0,
          background: `url(${backgroundLogin}) center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}
      >
        <img
          src={Logo1}
          alt="Logo1"
          style={{
            width: 180,
            height: 180,
            objectFit: 'contain',
          }}
        />
        <div style={{ marginTop: 0, textAlign: 'center' }}>
          <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 16 }}>Welcome</h1>
          <p style={{ fontSize: 20, fontWeight: 400, marginBottom: 20 }}>
            You can sign in to acces with your <br /> existing account.
          </p>
          <img
            src={Logo2}
            alt="Logo2"
            style={{
              width: 40,
              height: 70,
              margin: '0 auto',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* Right Side */}
      <div
        className="login-right"
        style={{
          flex: 1,
          minWidth: 0,
          background: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          boxShadow: '0 0 24px 0 rgba(0,0,0,0.08)',
        }}
      >
        <form
          onSubmit={handleSubmit}
          style={{
            width: '100%',
            maxWidth: 441,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            padding: '0 32px',
          }}
        >
          <h2
            style={{
              fontSize: 40,
              fontWeight: 700,
              color: '#444',
              textAlign: 'center',
              marginBottom: 8,
            }}
          >
            Create an account
          </h2>
          <div style={{ display: 'flex', gap: 10 }}>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: 16,
                border: '1.5px solid #888',
                fontSize: 16,
                outline: 'none',
                marginBottom: 0,
              }}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              style={{
                flex: 1,
                padding: '14px 20px',
                borderRadius: 16,
                border: '1.5px solid #888',
                fontSize: 16,
                outline: 'none',
                marginBottom: 0,
              }}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: 16,
              border: '1.5px solid #888',
              fontSize: 16,
              outline: 'none',
              marginBottom: 0,
            }}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: 16,
              border: '1.5px solid #888',
              fontSize: 16,
              outline: 'none',
              marginBottom: 0,
            }}
            required
          />
          <input
            type="password"
            name="retypePassword"
            placeholder="Retype your password"
            value={formData.retypePassword}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '14px 20px',
              borderRadius: 16,
              border: '1.5px solid #888',
              fontSize: 16,
              outline: 'none',
              marginBottom: 0,
            }}
            required
          />
          <label style={{ fontSize: 13, color: '#444', display: 'flex', alignItems: 'center', gap: 6 }}>
            <input
              type="checkbox"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              style={{ accentColor: '#6C47FF' }}
              required
            />
            I agree to the <span style={{ color: '#A259FF' }}>Terms & Conditions</span>
          </label>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #6C47FF 0%, #3D217F 100%)',
              color: '#fff',
              fontSize: 22,
              fontWeight: 500,
              border: 'none',
              borderRadius: 16,
              padding: '14px 0',
              marginTop: 8,
              marginBottom: 8,
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 #a259ff33',
              transition: 'background 0.2s',
            }}
          >
            Create account
          </button>
        </form>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .login-flex-container {
            flex-direction: column !important;
          }
          .login-left, .login-right {
            border-radius: 0 !important;
            min-width: 0 !important;
            width: 100% !important;
            max-width: 100% !important;
            min-height: 300px !important;
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Register;