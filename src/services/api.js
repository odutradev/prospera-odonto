import axios from 'axios';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: true ? "https://api.prosperaodonto.pro/v1/" : "http://localhost:1000/v1/",
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;