import React, { useState } from 'react';
import './AnswerCard.css';
import { useAppContext } from '../context/AppContext';

function AnswerCard({ content }) {
  const { role } = useAppContext();
  const [votes, setVotes] = useState(0);
  const [accepted, setAccepted] = useState(false);

  const upvote = () => setVotes((v) => v + 1);
  const downvote = () => setVotes((v) => v - 1);
  const toggleAccept = () => setAccepted((a) => !a);

  return (
    <div className={`answer-card ${accepted ? 'accepted' : ''}`}>
      <div className="answer-controls">
        <button onClick={upvote} className="vote-btn">🔼</button>
        <span className="vote-count">{votes}</span>
        <button onClick={downvote} className="vote-btn">🔽</button>
      </div>

      <div
        className="answer-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {(role === 'User' || role === 'Admin') && (
        <div className="answer-actions">
          <button
            onClick={toggleAccept}
            className={`accept-btn ${accepted ? 'active' : ''}`}
          >
            {accepted ? '✅ Accepted' : '✔ Accept Answer'}
          </button>
        </div>
      )}
    </div>
  );
}

export default AnswerCard;
