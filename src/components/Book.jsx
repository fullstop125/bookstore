import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const Book = ({
  title, author, button, id,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <li>{title}</li>
      <li>{author}</li>
      <li>
        <button
          type="button"
          onClick={() => {
            dispatch(removeBook(id));
          }}
        >
          {button}
        </button>
      </li>
    </>
  );
};

export default Book;
