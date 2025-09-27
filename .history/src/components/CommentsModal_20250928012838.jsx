import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/commentsmodal.css';

Modal.setAppElement('#root');

const CommentsModal = ({ isOpen, onRequestClose }) => {
  const [comments, setComments] = useState([
    { author: 'Sam', text: 'This is a great book!', date: new Date().toLocaleString() },
    { author: 'John', text: 'I really enjoyed reading this.', date: new Date().toLocaleString() },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        author: 'User', // In a real app, this would be the logged-in user
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
      contentLabel="Comments Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Comments</h2>
        <button type="button" onClick={onRequestClose} className="close-btn">&times;</button>
      </div>
      <div className="modal-body">
        <ul className="comments-list">
          {comments.map((comment) => (
            <li key={comment.date} className="comment-item">
              <div className="comment-header">
                <p className="comment-author">{comment.author}</p>
                <p className="comment-date">{comment.date}</p>
              </div>
              <p className="comment-text">{comment.text}</p>
            </li>
          ))}
        </ul>
        <form className="comment-form" onSubmit={handleCommentSubmit}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
          <button type="submit">Post</button>
        </form>
      </div>
    </Modal>
  );
};

export default CommentsModal;