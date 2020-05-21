import {booksActionTypes} from '../../actionTypes';
import {BooksApi} from '../../apis';

export const getBooks = ()=> async (dispatch)=>{
  const {GET_BOOKS} = booksActionTypes;
  dispatch({type: `${GET_BOOKS}_started`});
  try {
    const res = await BooksApi.getBooks();
    if (res.status !== 200) {
      const error = {
        message: `Something went wrong !`,
      };
      throw error;
    }
    const res_json = await res.json();
    dispatch({type: `${GET_BOOKS}_success`, payload: res_json});
  } catch (err) {
    dispatch({type: `${GET_BOOKS}_failed`, payload: err});
  }
};

export const getChaptersByBookId = (bookId)=> async (dispatch)=>{
  const {GET_CHAPTERS_BY_BOOK_ID} = booksActionTypes;
  dispatch({type: `${GET_CHAPTERS_BY_BOOK_ID}_started`});
  try {
    const res = await BooksApi.getChaptersByBookId(bookId);
    if (res.status !== 200) {
      const error = {
        message: `Sorry, something went wrong !`,
      };
      throw error;
    }
    const res_json = await res.json();
    dispatch({type: `${GET_CHAPTERS_BY_BOOK_ID}_success`, payload: res_json});
  } catch (err) {
    dispatch({type: `${GET_CHAPTERS_BY_BOOK_ID}_failed`, payload: err});
  }
};
