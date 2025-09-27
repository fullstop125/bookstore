import React from 'react';
import Modal from 'react-modal';
import '../assets/styles/commentsmodal.css';

Modal.setAppElement('#root');

const CommentsModal = ({ isOpen, onRequestClose }) => (
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
        <li className="comment-item">
          <p className="comment-author">Sam</p>
          <p className="comment-text">This is a great book!</p>
        </li>
        <li className="comment-item">
          <p className="comment-author">John</p>
          <p className="comment-text">I really enjoyed reading this.</p>
        </li>
      </ul>
      <form className="comment-form">
        <input type="text" placeholder="Add a comment..." />
        <button type="submit">Post</button>
      </form>
    </div>
  </Modal>
);

export default CommentsModal;