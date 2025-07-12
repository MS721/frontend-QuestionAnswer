import React from 'react';
import { useParams } from 'react-router-dom';
import QuestionCard from '../components/QuestionCard';

function TopicPage() {
  const { topicName } = useParams();

  const dummyQuestions = [
    { id: 1, title: 'React useEffect issue', description: '...', tags: ['React'] },
    { id: 2, title: 'JavaScript scope confusion', description: '...', tags: ['JavaScript'] },
    { id: 3, title: 'Intro to ML', description: '...', tags: ['AI/ML'] },
  ];

  const filtered = dummyQuestions.filter(q =>
    q.tags.map(t => t.toLowerCase()).includes(topicName.toLowerCase())
  );

  return (
    <div className="container">
      <h2 className="gothic-text">Questions about {topicName}</h2>
      {filtered.length > 0 ? (
        filtered.map(q => (
          <QuestionCard key={q.id} {...q} />
        ))
      ) : (
        <p>No questions yet for this topic.</p>
      )}
    </div>
  );
}

export default TopicPage;
