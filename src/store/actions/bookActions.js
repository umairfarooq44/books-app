import * as actionTypes from './actionTypes';
import { getBook } from '../../api/IndexAPI';

const onGetBookReq = () => ({
  type: actionTypes.GET_BOOK_REQ,
});

const onGetBookSuccess = (data) => ({
  type: actionTypes.GET_BOOK_RES,
  data,
});

const onGetBookError = () => ({
  type: actionTypes.GET_BOOK_ERROR,
});

const getBookData = (id) => async (dispatch) => {
  try {
    dispatch(onGetBookReq());
    const { data } = await getBook(id);
    dispatch(onGetBookSuccess(data));
    return data;
  } catch (error) {
    dispatch(onGetBookError());
    return error;
  }
};

export default getBookData;
