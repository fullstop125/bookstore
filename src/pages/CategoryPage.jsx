import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { showStatus } from '../redux/categories/categories';
import '../assets/styles/categoriespage.css';

const CategoryPage = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    e.preventDefault();
    dispatch(showStatus());
  };
  return (
    <div className="categories">
      <button type="button" onClick={clickHandler}>
        Check Status
      </button>
      {categories.map((category) => (
        <div key={uuid()}>
          <p>{category}</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryPage;
