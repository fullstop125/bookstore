import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import { createBook } from '../redux/books/books';
import '../assets/styles/form.css';

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
    if (!values.title || !values.author || !values.category) {
      toast.error('Please fill in all fields');
      return;
    }
    const newBook = {
      item_id: uuid(),
      title: values.title,
      author: values.author,
      category: values.category,
    };
    dispatch(createBook(newBook));
    toast.success('Book added successfully!');
    setValues({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <div className="form-container">
      <h1 className="new-book">ADD NEW BOOK</h1>
      <form id="form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="text"
            value={values.title}
            name="title"
            placeholder=" "
            id="input-1"
            className="input"
            onChange={handleChange}
          />
          <label htmlFor="input-1">Book Title</label>
        </div>
        <div className="input-container">
          <input
            type="text"
            value={values.author}
            name="author"
            placeholder=" "
            id="input-2"
            className="input"
            onChange={handleChange}
          />
          <label htmlFor="input-2">Author</label>
        </div>
        <div className="input-container">
          <select
            name="category"
            value={values.category}
            onChange={handleChange}
            id="otherField"
            className="input"
          >
            <option value="" disabled>Select Category</option>
            <option value="Action">Action</option>
            <option value="Biography">Biography</option>
            <option value="History">History</option>
            <option value="Horror">Horror</option>
            <option value="Kids">Kids</option>
            <option value="Learning">Learning</option>
            <option value="Sci-Fi">Sci-Fi</option>
          </select>
        </div>
        <button className="btn" type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
