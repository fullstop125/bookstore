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
  }, [dispatch]);

  return (
    <div className="book-list-container">
      <ul className="book-list">
        {books.map((book, index) => (
          <li key={book.id} style={{ animationDelay: `${index * 0.1}s` }} className="fade-in">
            <Book
              title={book.title}
              author={book.author}
              button="Remove"
              id={book.id}
              category={book.category}
            />
          </li>
        ))}
      </ul>
      <Form />
    </div>
  );
};

export default BookLists;
