import {handleActions} from 'redux-actions';

import {
  booksActionTypes,
} from '../../actionTypes';
import {createReducer, baseReducer} from '../utils';

const initialState = {
  ...baseReducer,
};

const chaptersReducer = createReducer(booksActionTypes.GET_CHAPTERS_BY_BOOK_ID, initialState);

const chapters = handleActions(
  {
    ...chaptersReducer,
  },
  initialState,
);

export default chapters;
