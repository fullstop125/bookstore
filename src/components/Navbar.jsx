import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/styles/navbar.css';

const Navbar = () => (
  <header>
    <nav>
      <h1>
        <NavLink to="/">Bookstore CMS</NavLink>
      </h1>
      <ul>
        <li>
          <NavLink to="/">Book</NavLink>
        </li>
        <li>
          <NavLink to="/categories">Categories</NavLink>
        </li>
      </ul>
    </nav>

  </header>
);

export default Navbar;
