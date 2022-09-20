// action types
export const CREATE_BOOK = 'books/books/CREATE_BOOK';
export const REMOVE_BOOK = 'books/books/REMOVE_BOOK';

// action creators
export const createBook = (book) => (dispatch) => {
  dispatch({
    type: CREATE_BOOK,
    payload: book,
  });
};

export const removeBook = (book) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    payload: book,
  });
};

// reducer
const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export default booksReducer;
