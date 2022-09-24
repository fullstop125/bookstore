import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../assets/styles/form.css';
import { v4 as uuid } from 'uuid';
import { createBook } from '../redux/books/books';

const Form = () => {
  const [values, setValues] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuid(),
      title: values.title,
      author: values.author,
      category: values.category,
    };
    dispatch(createBook(newBook));

    setValues({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div>
      <hr className="line" />
      <h1 className="new-book">ADD NEW BOOK</h1>
      <form id="form" type="submit">
        <input
          required
          type="title"
          value={values.title}
          name="title"
          placeholder="title"
          id="input-1"
          onChange={handleChange}
        />
        {' '}
        <input
          required
          type="author"
          value={values.author}
          name="author"
          placeholder="author"
          id="input-2"
          onChange={handleChange}
        />
        {' '}
        <select
          type="category"
          name="category"
          placeholder="category"
          value={values.category}
          onChange={handleChange}
          id="otherField"
        >
          <option>Select Category</option>
          <option value="Action">Action</option>
          <option value="Biography">Biography</option>
          <option value="History">History</option>
          <option value="Horror">Horror</option>
          <option value="Kids">Kids</option>
          <option value="Learning">Learning</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
        {' '}
        <button className="btn" type="submit" onClick={handleSubmit}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
