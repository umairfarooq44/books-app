import * as actionTypes from './actionTypes';
import { getBooksList } from '../../api/IndexAPI';

const onBooksListReq = () => ({
  type: actionTypes.GET_BOOKS_LIST_REQ,
});

const onBooksListSuccess = (data) => ({
  type: actionTypes.GET_BOOKS_LIST_RES,
  data,
});

const onBooksListError = () => ({
  type: actionTypes.GET_BOOKS_LIST_ERROR,
});

export const onSearchQueryChange = (query) => ({
  type: actionTypes.BOOKS_LIST_QUERY,
  query,
});

export const getBooks = (query) => async (dispatch) => {
  try {
    dispatch(onBooksListReq());
    const { data } = await getBooksList(query);
    dispatch(onBooksListSuccess(data));
    return data;
  } catch (error) {
    dispatch(onBooksListError());
    return error;
  }
};
