import React, { useEffect, useState } from 'react';

function ProfilePage() {
  const [email, setEmail] = useState('');
  const [skillset, setSkillset] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    const storedSkills = localStorage.getItem('skillset');
    setEmail(storedEmail || 'Not logged in');
    setSkillset(storedSkills || 'None provided');
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Your Profile</h2>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Skillset:</strong> {skillset}</p>
        
        {/* Optional placeholder */}
        <div style={styles.section}>
          <h3 style={{ color: 'var(--accent-color)' }}>Your Questions (demo)</h3>
          <ul style={styles.list}>
            <li>Q1: How does React useEffect work?</li>
            <li>Q2: What is the difference between var and let?</li>
            <li>Q3: Best practices for React form handling?</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '60px 20px',
    display: 'flex',
    justifyContent: 'center',
    color: 'var(--text-color)',
  },
  card: {
    background: 'var(--card-bg)',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
    maxWidth: '600px',
    width: '100%',
    fontSize: '1rem',
  },
  heading: {
    fontFamily: "'UnifrakturCook', cursive",
    marginBottom: '20px',
    color: 'var(--accent-color)',
    fontSize: '1.8rem',
  },
  section: {
    marginTop: '30px',
  },
  list: {
    paddingLeft: '20px',
  },
};

export default ProfilePage;
