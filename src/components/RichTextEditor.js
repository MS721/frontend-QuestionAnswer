import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import Quill styles
import './RichTextEditor.css'; // Optional: add additional styling if needed

function RichTextEditor({ value, onChange }) {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'strike'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      ['link', 'image'],
      [{ 'align': [] }],
      ['clean'],
    ],
  };

  const formats = [
    'header', 'bold', 'italic', 'strike',
    'list', 'bullet', 'link', 'image', 'align'
  ];

  return (
    <div className="rich-editor-wrapper">
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write your content here..."
        theme="snow"
      />
    </div>
  );
}

export default RichTextEditor;
