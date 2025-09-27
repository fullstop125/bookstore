import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { toast } from 'react-toastify';
import { removeBook } from '../redux/books/books';
import '../assets/styles/book.css';

const Book = ({
  title, author, button, id, category,
}) => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(Math.floor(Math.random() * 101));
  const [chapter, setChapter] = useState(Math.floor(Math.random() * 21));

  const handleUpdateProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
    setChapter((prev) => prev + 1);
  };

  return (
    <div className="card">
      <div className="card-content">
        <p className="category">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div className="card-actions">
          <button type="button" onClick={() => toast.info('Feature coming soon!')}>Comments</button>
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            {button}
          </button>
          <button type="button" onClick={() => toast.info('Feature coming soon!')}>Edit</button>
        </div>
      </div>
      <div className="progress-container">
        <div style={{ width: 100, height: 100 }}>
          <CircularProgressbar
            value={progress}
            styles={buildStyles({
              pathColor: `rgba(37, 117, 252, ${progress / 100})`,
              textColor: '#333',
              trailColor: '#d6d6d6',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <div className="progress-text">
          <p className="progress-percentage">
            {progress}
            %
          </p>
          <p className="progress-completed">Completed</p>
        </div>
      </div>
      <div className="chapter-container">
        <p className="chapter-label">CURRENT CHAPTER</p>
        <p className="chapter-current">
          Chapter
          {chapter}
        </p>
        <button type="button" className="chapter-update-btn" onClick={handleUpdateProgress}>UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

export default Book;
