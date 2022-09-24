import { createAsyncThunk } from '@reduxjs/toolkit';

const api = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qqxA7pQ2SsK4YvntBFD0/books';

// action types
export const CREATE_BOOK = 'books/books/CREATE_BOOK';
export const REMOVE_BOOK = 'books/books/REMOVE_BOOK';
export const SHOW_BOOKS = 'books/books/SHOW_BOOKS';

// action creators

export const showBooks = createAsyncThunk(
  SHOW_BOOKS,
  async (args, { dispatch }) => {
    const response = await fetch(api);
    const data = await response.json();

    const books = Object.keys(data).map((key) => ({
      id: key,
      ...data[key][0],
    }));

    dispatch({ type: SHOW_BOOKS, payload: books });

    return books;
  },
);

export const createBook = (book) => (dispatch) => {
  fetch(api, {
    method: 'POST',
    body: JSON.stringify(book),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => {
    dispatch({
      type: CREATE_BOOK,
    });
    dispatch(showBooks());
  });
};

export const removeBook = (id) => (dispatch) => {
  fetch(`${api}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then(() => dispatch({
    type: REMOVE_BOOK,
    payload: id,
  }));
};

// reducer
const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { ...state };

    case REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case SHOW_BOOKS:
      return { books: action.payload };

    default:
      return state;
  }
};

export default booksReducer;
