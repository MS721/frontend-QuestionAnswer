import React, { useRef, useEffect, useState } from 'react';
import QuestionCard from '../components/QuestionCard';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const slideshowRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const trendingTopics = [
    { name: 'React', image: 'https://img.icons8.com/color/400/react-native.png' },
    { name: 'JavaScript', image: 'https://img.icons8.com/color/400/javascript.png' },
    { name: 'AI/ML', image: 'https://img.icons8.com/color/400/artificial-intelligence.png' },
    { name: 'Databases', image: 'https://img.icons8.com/color/400/database.png' },
    { name: 'Cybersecurity', image: 'https://img.icons8.com/color/400/lock.png' }
  ];

  const dummyQuestions = [
    {
      id: 1,
      title: 'What is the difference between let and var in JavaScript?',
      description: 'I keep hearing about scope differences...',
      tags: ['JavaScript', 'Variables'],
    },
    {
      id: 2,
      title: 'How to use useEffect in React?',
      description: 'I am new to React hooks and need help...',
      tags: ['React', 'Hooks'],
    },
    {
      id: 3,
      title: 'What are some ML models for classification?',
      description: 'Need help choosing the right one...',
      tags: ['AI/ML'],
    },
  ];

  const skillset = localStorage.getItem('skillset') || '';
  const recommendedQuestions = dummyQuestions.filter((q) =>
    skillset.toLowerCase().split(',').some((skill) =>
      q.tags.some((tag) => tag.toLowerCase().includes(skill.trim()))
    )
  );

  useEffect(() => {
    const container = slideshowRef.current;
    if (!container) return;

    const slideWidth = container.querySelector('.sale-box')?.offsetWidth + 20;
    const totalSlides = trendingTopics.length;

    const interval = setInterval(() => {
      const newIndex = (currentSlide + 1) % totalSlides;
      container.scrollTo({
        left: newIndex * slideWidth,
        behavior: 'smooth',
      });
      setCurrentSlide(newIndex);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, trendingTopics.length]);

  return (
    <div className="container">
      
      {/* Trending Topics */}
      <section className="sales-section">
        <h2 className="gothic-text"> Trending Topics</h2>
        <div className="sales-slideshow" ref={slideshowRef}>
          {trendingTopics.map((topic, index) => (
            <Link to={`/topic/${topic.name}`} key={index} className="sale-box">
              <img src={topic.image} alt={topic.name} className="sale-image" />
            </Link>
          ))}
        </div>
      </section>

      {/* Top Questions */}
      <section className="top-questions">
        <h2 className="gothic-text"> Top Questions</h2>
        {dummyQuestions.map((q) => (
          <QuestionCard
            key={q.id}
            id={q.id}
            title={q.title}
            description={q.description}
            tags={q.tags}
          />
        ))}
      </section>

      {/* Recommendations */}
      {recommendedQuestions.length > 0 && (
        <section className="recommendations">
          <h2 className="gothic-text"> Recommended For You</h2>
          <div className="recommendation-grid">
            {recommendedQuestions.map((q) => (
              <div className="recommend-card" key={q.id}>
                {q.title}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h3 className="gothic-text">StackIt</h3>
            <p>Your collaborative Q&A platform for curious developers and learners.</p>
          </div>

          <div className="footer-section contact">
            <h4>Contact</h4>
            <p>Email: support@stackit.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

          <div className="footer-section links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/ask">Ask Question</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} StackIt. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
