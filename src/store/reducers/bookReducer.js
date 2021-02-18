import * as actionTypes from '../actions/actionTypes';

const initialState = {
  data: {},
  loading: false,
};

const booksListReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case actionTypes.GET_BOOK_REQ: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_BOOK_RES: {
      return { ...state, loading: false, data: action.data };
    }
    case actionTypes.GET_BOOK_ERROR: {
      return { ...state, loading: false };
    }
    default: {
      return { ...state };
    }
  }
};

export default booksListReducer;
