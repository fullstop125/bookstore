import React, { useState } from 'react';
import Modal from 'react-modal';
import '../assets/styles/commentsmodal.css';

const CommentsModal = ({ isOpen, onRequestClose }) => {
  const [comments, setComments] = useState([
    { author: 'Sam', text: 'This is a great book!', date: new Date().toLocaleString() },
    { author: 'John', text: 'I really enjoyed reading this.', date: new Date().toLocaleString() },
  ]);
// ... existing code ...
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  return (
// ... existing code ...
      overlayClassName="overlay"
    >
      <div className="modal-header">
        <h2>Comments</h2>
// ... existing code ...
        </form>
      </div>
    </Modal>
  );
};

export default CommentsModal;