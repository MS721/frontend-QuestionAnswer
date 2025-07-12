import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === 'admin@stackit.com') {
      localStorage.setItem('role', 'Admin');
    } else {
      localStorage.setItem('role', 'User');
    }
    localStorage.setItem('userEmail', email);
    navigate('/');
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login to StackIt</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Login</button>
        </form>
        <p style={{ marginTop: 12 }}>
          New here? <span onClick={() => navigate('/signup')} style={styles.link}>Sign up</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'var(--bg-color)',
    color: 'var(--text-color)',
  },
  box: {
    background: 'var(--card-bg)',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontFamily: "'UnifrakturCook', cursive",
    marginBottom: '20px',
    color: 'var(--accent-color)',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '14px',
    border: '1px solid var(--accent-color)',
    borderRadius: '6px',
    background: 'var(--bg-color)',
    color: 'var(--text-color)',
  },
  button: {
    width: '100%',
    padding: '10px',
    background: 'var(--accent-color)',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  },
  link: {
    color: 'var(--accent-color)',
    cursor: 'pointer',
    fontWeight: '500',
  },
};

export default LoginPage;
