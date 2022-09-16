import React from 'react';

const Book = ({ title, author, button }) => (
  <>
    <li>{title}</li>
    <li>{author}</li>
    <li>
      <button type="button">{button}</button>
    </li>
  </>
);

export default Book;
