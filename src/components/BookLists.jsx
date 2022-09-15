import React from 'react';
import Book from './Book';
import Form from './Form';
import '../assets/styles/booklist.css';

const BookLists = () => (
  <>
    <ul>
      <Book>Title</Book>
      <Book>Author</Book>
      <Book>
        <button type="button">Remove</button>
      </Book>
    </ul>
    <Form />
  </>
);

export default BookLists;
