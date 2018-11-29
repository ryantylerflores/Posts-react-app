import axios from 'axios';
import ReduxPromise from 'redux-promise';

export const FETCH_POSTS = 'fetch_posts';
export const FETCH_POST = 'fetch_post';
export const CREATE_POST = 'create_post';


const API_KEY = 'ryantylerflores';
const ROOT_URL = `http://reduxblog.herokuapp.com/api/posts`;

export function fetchPosts() {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const url = `${ROOT_URL}?key=${API_KEY}`;
  const request = axios.post(url, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  }
}

export function fetchPost(id) {
  const url = `${ROOT_URL}/${id}?key=${API_KEY}`;
  const request = axios.get(url);

  return {
    type: FETCH_POST,
    payload: request
  }
}