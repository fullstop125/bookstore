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

export const removeBook = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_BOOK,
    payload: id,
  });
};

// reducer
const initialState = {
  books: [],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return { books: [...state.books, action.payload] };

    case REMOVE_BOOK:
      return {
        books: state.books.filter((book) => book.id !== action.payload),
      };

    default:
      return state;
  }
};

export default booksReducer;
