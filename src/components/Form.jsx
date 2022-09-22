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
      <select name="category" value={values.category} onChange={handleChange}>
        <option value="">Select Category</option>
        <option value="Action">Action</option>
        <option value="Biography">Biography</option>
        <option value="History">History</option>
        <option value="Horror">Horror</option>
        <option value="Kids">Kids</option>
        <option value="Learning">Learning</option>
        <option value="Sci-Fi">Sci-Fi</option>
      </select>

      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default Form;
