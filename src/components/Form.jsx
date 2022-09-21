import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../assets/styles/form.css';
import { v4 as uuid } from 'uuid';
import { createBook } from '../redux/books/books';

const Form = () => {
  const [values, setValues] = useState({
    id: uuid(),
    title: '',
    author: '',
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
    setValues({
      id: uuid(),
      title: '',
      author: '',
    });
    dispatch(createBook(values));
  };

  return (
    <form>
      <input
        type="text"
        placeholder="Title"
        name="title"
        value={values.title}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        value={values.author}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
