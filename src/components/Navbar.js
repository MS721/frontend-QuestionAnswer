import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { useAppContext } from '../context/AppContext';

function Navbar() {
  const [theme, setTheme] = useState('dark');
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();

  const { role, setRole, notifications } = useAppContext();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleLogout = () => {
    localStorage.clear();
    setRole('Guest');
    setShowNotifications(false);
    navigate('/');
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo gothic-text">StackIt</Link>

      <div className="nav-right">
        <Link to="/">Home</Link>

        {role !== 'Guest' && <Link to="/ask">Ask</Link>}

        {/* 🔔 Notifications */}
        {role !== 'Guest' && (
          <div className="notification-bell">
            <span className="bell-icon" onClick={() => setShowNotifications(!showNotifications)}>🔔</span>
            {notifications.length > 0 && (
              <span className="notification-count">{notifications.length}</span>
            )}
            {showNotifications && (
              <div className="notification-dropdown">
                {notifications.map((note, index) => (
                  <div key={index} className="notification-item">{note}</div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 🌗 Theme Toggle */}
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* 🔐 Auth Buttons */}
        {role === 'Guest' ? (
          <Link to="/login" className="login-btn">Login</Link>
        ) : (
          <>
            <Link to="/profile" className="login-btn">Profile</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
