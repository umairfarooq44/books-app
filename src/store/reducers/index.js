import { combineReducers } from 'redux';

import books from './booksListReducer';
import book from './bookReducer';

const rootReducer = combineReducers({
  books,
  book,
});

export default rootReducer;
