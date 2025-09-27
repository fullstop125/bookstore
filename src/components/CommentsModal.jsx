import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/commentsmodal.css';

const CommentsModal = ({ isOpen, onRequestClose }) => {
  const [comments, setComments] = useState([
    { author: 'Sam', date: '2023-10-27 10:30', text: 'Great book, really enjoyed the plot!' },
    { author: 'Alex', date: '2023-10-27 11:00', text: 'I found the ending a bit predictable.' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handlePostComment = () => {
    if (newComment.trim()) {
      const newCommentObject = {
        author: 'User', // Placeholder for logged-in user
        date: new Date().toLocaleString(),
        text: newComment,
      };
      setComments([...comments, newCommentObject]);
      setNewComment('');
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 1000,
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          background: 'none',
          border: 'none',
          padding: 0,
          overflow: 'visible',
        },
      }}
    >
      <div className="modal-content">
        <button type="button" className="close-button" onClick={onRequestClose}>&times;</button>
        <h2>Comments</h2>
        <div className="comments-list">
          {comments.map((comment) => (
            <div key={comment.date} className="comment">
              <div className="comment-meta">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.text}</p>
            </div>
          ))}
        </div>
        <div className="comment-form">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
          />
          <button type="button" onClick={handlePostComment}>Post</button>
        </div>
      </div>
    </Modal>
  );
};

export default CommentsModal;