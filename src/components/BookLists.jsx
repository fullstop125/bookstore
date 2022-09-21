import { useSelector } from 'react-redux';
import React from 'react';
import Book from './Book';
import Form from './Form';
import '../assets/styles/booklist.css';

const BookLists = () => {
  const { books } = useSelector((state) => state.books);

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
          />
        ))}
      </ul>
      <Form />
    </>
  );
};

export default BookLists;
