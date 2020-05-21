import {API_BASE_URL} from '../../config';

export default class BooksApi {
  static getBooks= async ()=> {
    const url = `${API_BASE_URL}book`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer LehmJbQtyzC7JLiN7S2A',
    };
    return fetch(url, {
      method: 'GET',
      headers,
    });
  };
  static getChaptersByBookId= async (bookId)=>{
    const url = `${API_BASE_URL}book/${bookId}/chapter`;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer LehmJbQtyzC7JLiN7S2A',
    };
    return fetch(url, {
      method: 'GET',
      headers,
    });
  }
}
