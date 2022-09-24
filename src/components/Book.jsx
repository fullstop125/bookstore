import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';
import '../assets/styles/book.css';

const Book = ({
  title, author, button, id, category,
}) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div>
        <p className="category">{category}</p>
        <h1 className="title">{title}</h1>
        <p className="author">{author}</p>
        <div className="card-add">
          <p> comments</p>
          <hr />
          <button
            type="button"
            onClick={() => {
              dispatch(removeBook(id));
            }}
          >
            {button}
          </button>
          <hr />
          <p>Edit</p>
        </div>
      </div>
      <div className="completed">
        <div className="panel-bg">
          <hr />
        </div>
        <div className="completed-num">
          <h1> 80%</h1>
          <p>Completed</p>
        </div>
        <hr className="line-2" />
        <div className="progress">
          <p>CURRENT CHAPTER</p>
          <button type="button">update Progress</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
