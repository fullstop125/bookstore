import React from 'react';
import '../assets/styles/form.css';

const Form = () => (
  <form>
    <input type="text" placeholder='Title' />
    <input type="text" placeholder='Author' />
    <button type="submit">Submit</button>
  </form>
);

export default Form;
