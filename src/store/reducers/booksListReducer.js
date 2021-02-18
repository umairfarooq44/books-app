import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchQuery: '',
  data: [],
  loading: false,
};

const booksListReducer = (state = initialState, action = { type: '' }) => {
  switch (action.type) {
    case actionTypes.GET_BOOKS_LIST_REQ: {
      return { ...state, loading: true };
    }
    case actionTypes.GET_BOOKS_LIST_RES: {
      return { ...state, loading: false, data: action.data };
    }
    case actionTypes.GET_BOOKS_LIST_ERROR: {
      return { ...state, loading: false };
    }
    case actionTypes.BOOKS_LIST_QUERY: {
      return { ...state, searchQuery: action.query };
    }
    default: {
      return { ...state };
    }
  }
};

export default booksListReducer;
