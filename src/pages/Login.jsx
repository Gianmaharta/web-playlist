import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo1 from '../assets/Logo1.png';
import Logo2 from '../assets/Logo2.png';
import backgroundLogin from '../assets/backgroundLogin.png';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
      // Contoh validasi login sederhana (nanti bisa diganti dengan login API)
    if (formData.email && formData.password) {
      // Simulasikan login berhasil
      navigate('/dashboard');
    } else {
      alert('Email dan password wajib diisi.');
    }
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
            maxWidth: 370,
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
            Sign In
          </h2>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 20px 14px 44px',
                borderRadius: 32,
                border: '1.5px solid #888',
                fontSize: 16,
                outline: 'none',
                marginBottom: 16,
                backgroundColor: '#fff',
                color: '#333',

              }}
              required
            />
            <span
              style={{
                position: 'absolute',
                left: 16,
                top: 13,
                color: '#888',
                fontSize: 18,
              }}
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="10" cy="7" r="4"/><path d="M2 18c0-4 8-4 8-4s8 0 8 4"/></svg>
            </span>
          </div>
          <div style={{ position: 'relative' }}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '14px 20px 14px 44px',
                borderRadius: 32,
                border: '1.5px solid #888',
                fontSize: 16,
                outline: 'none',
                marginBottom: 8,
                backgroundColor: '#fff',
                color: '#333',
              }}
              required
            />
            <span
              style={{
                position: 'absolute',
                left: 16,
                top: 13,
                color: '#888',
                fontSize: 18,
              }}
            >
              {/* Ganti SVG di bawah ini dengan icon gembok */}
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="5" y="9" width="10" height="7" rx="3.5" />
                <path d="M7 9V7a3 3 0 0 1 6 0v2" />
              </svg>
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                style={{ 
                  accentColor: '#6C47FF',
                  width: 16,
                  height: 16, 
                }}
              />
              <span style={{ marginLeft: 8, fontSize: 14, color: '#000000' }}>
                Remember me
              </span>
            </label>
            <a href="#" style={{ color: '#444', textDecoration: 'none' }}>Forgot password?</a>
          </div>
          <button
            type="submit"
            style={{
              background: 'linear-gradient(90deg, #6C47FF 0%, #A259FF 100%)',
              color: '#fff',
              fontSize: 22,
              fontWeight: 500,
              border: 'none',
              borderRadius: 32,
              padding: '14px 0',
              marginTop: 8,
              marginBottom: 8,
              cursor: 'pointer',
              boxShadow: '0 2px 8px 0 #a259ff33',
              transition: 'background 0.2s',
            }}
          >
            Sign In
          </button>
          <div style={{ textAlign: 'center', fontSize: 15, color: '#888' }}>
            Don&apos;t have an account?{' '}
            <span
              onClick={() => navigate('/register')}
              style={{ color: '#A259FF', textDecoration: 'none', fontWeight: 500, cursor: 'pointer' }}
            >
              Create an Account
            </span>
          </div>
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

export default Login;
