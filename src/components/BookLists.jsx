import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Book from './Book';
import Form from './Form';
import '../assets/styles/booklist.css';
import { showBooks } from '../redux/books/books';

const BookLists = () => {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showBooks());
  },
  []);

  return (
    <>
      <ul>
        {books.map((book) => (
          <Book
            title={book.title}
            author={book.author}
            button="Remove"
            id={book.id}
            key={book.id}
            category={book.category}
          />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookLists;
