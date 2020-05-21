import {API_BASE_URL} from '../../config';

export default class MoviesApi {
  static getMovies= async ()=> {
    const url = `${API_BASE_URL}movie`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer LehmJbQtyzC7JLiN7S2A',
    };
    return fetch(url, {
      method: 'GET',
      headers,
    });
  };
}
