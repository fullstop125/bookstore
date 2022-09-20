// action types

export const SHOW_STATUS = 'categories/categories/SHOW_STATUS';

// action creators

export const showStatus = () => (dispatch) => {
  dispatch({
    type: SHOW_STATUS,
    payload: 'under construction',
  });
};

// reducer

const initialState = '';

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_STATUS:
      return action.payload;
    default:
      return state;
  }
};

export default categoriesReducer;
