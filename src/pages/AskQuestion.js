import React, { useState } from 'react';
import RichTextEditor from '../components/RichTextEditor';
import Select from 'react-select';
import './AskQuestion.css';

function AskQuestion() {
  const [title, setTitle] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const tagOptions = [
    { value: 'React', label: 'React' },
    { value: 'JavaScript', label: 'JavaScript' },
    { value: 'AI/ML', label: 'AI/ML' },
    { value: 'Database', label: 'Database' },
    { value: 'Cybersecurity', label: 'Cybersecurity' },
    { value: 'Hooks', label: 'Hooks' },
    { value: 'JWT', label: 'JWT' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || selectedTags.length === 0) {
      alert(' Please fill in all fields.');
      return;
    }

    const newQuestion = {
      title: title.trim(),
      description: description.trim(),
      tags: selectedTags.map(tag => tag.value),
    };

    console.log(' Question submitted:', newQuestion);
    setSubmitted(true);
  };

  return (
    <div className="container">
      <h2 className="gothic-text">Ask a New Question</h2>

      {!submitted ? (
        <form className="ask-form" onSubmit={handleSubmit}>
          {/* Title */}
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="e.g. How to implement authentication in React?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Description */}
          <label htmlFor="description">Description</label>
          <RichTextEditor value={description} onChange={setDescription} />

          {/* Tags */}
          <label htmlFor="tags">Tags <small>(select multiple)</small></label>
          <Select
            id="tags"
            options={tagOptions}
            isMulti
            className="tag-select"
            onChange={setSelectedTags}
            placeholder="Choose tags..."
          />

          <button type="submit" className="button">Submit Question</button>
        </form>
      ) : (
        <div className="card success-msg">
           Your question has been submitted!
        </div>
      )}
    </div>
  );
}

export default AskQuestion;
