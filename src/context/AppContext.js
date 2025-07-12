import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export function AppContextProvider({ children }) {
  // ✅ Load role from localStorage on mount
  const [role, setRole] = useState(localStorage.getItem('role') || 'Guest');
  const [notifications, setNotifications] = useState([
    'Someone answered your question.',
    '@you were mentioned in a comment.',
  ]);

  const addNotification = (message) => {
    setNotifications((prev) => [message, ...prev]);
  };

  // ✅ Keep localStorage in sync if role changes
  useEffect(() => {
    localStorage.setItem('role', role);
  }, [role]);

  return (
    <AppContext.Provider value={{ role, setRole, notifications, addNotification }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
