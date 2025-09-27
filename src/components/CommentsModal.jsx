import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/commentsmodal.css';

const CommentsModal = ({ isOpen, onRequestClose }) => {
  const [comments, setComments] = useState([
    { author: 'Sam', text: 'This is a great book!', date: new Date().toLocaleString() },
    { author: 'John', text: 'I really enjoyed reading this.', date: new Date().toLocaleString() },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() !== '') {
      const comment = {
        author: 'Anonymous',
        text: newComment,
        date: new Date().toLocaleString(),
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="comments-modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Comments</h2>
        <button onClick={onRequestClose} className="close-button">&times;</button>
      </div>
      <div className="modal-body">
        <ul className="comments-list">
          {comments.map((comment, idx) => (
            <li key={idx} className="comment-item">
              <div>
                <strong>{comment.author}</strong> <span className="comment-date">{comment.date}</span>
              </div>
              <div>{comment.text}</div>
            </li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="comment-form">
          <input
            type="text"
            value={newComment}
            onChange={handleInputChange}
            placeholder="Add a comment..."
            className="comment-input"
          />
          <button type="submit" className="submit-button">Post</button>
        </form>
      </div>
    </Modal>
  );
};

export default CommentsModal;