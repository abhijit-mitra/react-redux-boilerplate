import {combineReducers} from 'redux';

import books from './books/';
import chapters from './chapters';
import movies from './movies';

export default combineReducers({books, chapters, movies});
