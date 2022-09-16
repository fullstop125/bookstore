import React from 'react';
import Book from './Book';
import Form from './Form';
import '../assets/styles/booklist.css';

const BookLists = () => (
  <>
    <ul>
      <Book title="The Hunger Games" author="Suzanne Collins" button="Remove" />
      <Book title="Dune" author="Frank Herbert" button="Remove" />
      <Book title="Capital in the Twenty-First Century" author="Suzanne Collins" button="Remove" />

    </ul>
    <Form />
  </>
);

export default BookLists;
