import axios from 'axios';
import { SEARCH_URL, BOOK_URL } from './urls';

export const getBooksList = ({ searchQuery, pageNumber }) => {
  return axios.get(`${SEARCH_URL}?q=${searchQuery}&limit=12&page=${pageNumber}`);
};

export const getBook = (id) => {
  return axios.get(`${BOOK_URL}/${id}.json`);
};
