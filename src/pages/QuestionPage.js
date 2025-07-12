import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import RichTextEditor from '../components/RichTextEditor';
import AnswerCard from '../components/AnswerCard';
import { useAppContext } from '../context/AppContext';
import './QuestionPage.css';

function QuestionPage() {
  const { id } = useParams();
  const questionId = parseInt(id);
  const { role, addNotification } = useAppContext();

  const dummyQuestions = [
    {
      id: 1,
      title: 'What is the difference between let and var in JavaScript?',
      description: 'I keep hearing about scope differences...',
      tags: ['JavaScript', 'Variables'],
      answers: [
        { id: 1, content: 'let is block scoped, var is function scoped.' },
        { id: 2, content: 'Use let and const in modern JS. Avoid var.' },
      ],
    },
    {
      id: 2,
      title: 'How to use useEffect in React?',
      description: 'I am new to React hooks and need help...',
      tags: ['React', 'Hooks'],
      answers: [
        { id: 1, content: 'useEffect runs after render. You can use it for side effects.' },
      ],
    },
  ];

  const question = dummyQuestions.find(q => q.id === questionId);
  const [answerText, setAnswerText] = useState('');
  const [answers, setAnswers] = useState(question?.answers || []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!answerText.trim()) {
      alert('Please write something before submitting.');
      return;
    }

    const newAnswer = {
      id: Date.now(),
      content: answerText,
    };

    setAnswers([...answers, newAnswer]);
    setAnswerText('');
    addNotification('✅ You submitted a new answer.');
  };

  if (!question) return <div className="container">❌ Question not found.</div>;

  return (
    <div className="container">
      <h2 className="question-title">{question.title}</h2>
      <p className="question-desc">{question.description}</p>
      <div className="question-tags">
        {question.tags.map((tag, i) => (
          <span key={i} className="tag">#{tag}</span>
        ))}
      </div>

      <h3 style={{ marginTop: '40px', color: 'var(--accent-color)' }}>Answers</h3>
      {answers.map(ans => (
        <AnswerCard key={ans.id} content={ans.content} />
      ))}

      {role === 'User' || role === 'Admin' ? (
        <>
          <h3 style={{ marginTop: '40px' }}>Submit Your Answer</h3>
          <form onSubmit={handleSubmit} className="answer-form">
            <RichTextEditor value={answerText} onChange={setAnswerText} />
            <button className="button" type="submit">Submit Answer</button>
          </form>
        </>
      ) : (
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Login as a User to submit an answer.
        </p>
      )}
    </div>
  );
}

export default QuestionPage;
