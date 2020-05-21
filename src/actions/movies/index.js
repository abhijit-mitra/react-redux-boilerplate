import {movieActionTypes} from '../../actionTypes';
import {MoviesApi} from '../../apis';

export const getMovies = ()=> async (dispatch)=>{
  const {GET_MOVIES} = movieActionTypes;
  dispatch({type: `${GET_MOVIES}_started`});
  try {
    const res = await MoviesApi.getMovies();
    if (res.status !== 200) {
      const error = {
        message: `Sorry, Something went wrong !`,
      };
      throw error;
    }
    const res_json = await res.json();
    dispatch({type: `${GET_MOVIES}_success`, payload: res_json});
  } catch (err) {
    dispatch({type: `${GET_MOVIES}_failed`, payload: err});
  }
};
