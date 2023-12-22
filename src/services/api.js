import axios from 'axios';

import { baseURL } from '../assets/config';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;