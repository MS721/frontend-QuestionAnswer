import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [skillset, setSkillset] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Passwords don't match");
      return;
    }

    localStorage.setItem('role', 'User');
    localStorage.setItem('userEmail', email);
    localStorage.setItem('skillset', skillset);
    navigate('/');
  };

  return (
    <div style={styles.page}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Sign Up for StackIt</h2>
        <form onSubmit={handleSignup}>
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
          <input
            type="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Skillset (e.g. React, ML)"
            required
            value={skillset}
            onChange={(e) => setSkillset(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={{ marginTop: 12 }}>
          Already have an account? <span onClick={() => navigate('/login')} style={styles.link}>Log in</span>
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

export default SignupPage;
