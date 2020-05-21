import {handleActions} from 'redux-actions';

import {
  booksActionTypes,
} from '../../actionTypes';
import {createReducer, baseReducer} from '../utils';

const initialState = {
  ...baseReducer,
};

const booksReducer = createReducer(booksActionTypes.GET_BOOKS, initialState);

const books = handleActions(
  {
    ...booksReducer,
  },
  initialState,
);

export default books;
