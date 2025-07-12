import React from 'react';
import { Link } from 'react-router-dom';
import './QuestionCard.css';

function QuestionCard({ id, title, description, tags }) {
  return (
    <div className="question-card">
      <h3 className="question-title">{title}</h3>

      <div className="question-tags">
        {tags.map((tag, index) => (
          <span key={index} className="tag">#{tag}</span>
        ))}
      </div>

      <p className="question-desc">
        {description.length > 150 ? `${description.slice(0, 150)}...` : description}
      </p>

      <div className="question-actions">
        <Link to={`/question/${id}`} className="view-question-btn">View Question</Link>
      </div>
    </div>
  );
}

export default QuestionCard;
