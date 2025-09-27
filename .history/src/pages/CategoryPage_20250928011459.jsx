import React from 'react';
import '../assets/styles/categoriespage.css';

const CategoryPage = () => (
  <div className="categories-container">
    <div className="construction-card">
      <h1 className="construction-title">Coming Soon</h1>
      <p className="construction-text">
        We are currently working on this section to bring you an amazing experience.
        Stay tuned!
      </p>
      <div className="loader" />
    </div>
  </div>
);

export default CategoryPage;
