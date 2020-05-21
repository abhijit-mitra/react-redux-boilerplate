import {handleActions} from 'redux-actions';

import {
  movieActionTypes,
} from '../../actionTypes';
import {createReducer, baseReducer} from '../utils';

const initialState = {
  ...baseReducer,
};

const moviesReducer = createReducer(movieActionTypes.GET_MOVIES, initialState);

const movies = handleActions(
  {
    ...moviesReducer,
  },
  initialState,
);

export default movies;
