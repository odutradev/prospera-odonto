import axios from 'axios';

var token = localStorage.getItem('token');

const api = axios.create({
  baseURL: "https://830656a8-78af-4cdf-935c-49d2c12051db-00-38ec9n63j8jfl.worf.replit.dev/v3/",
  headers: {
    'Content-Type': 'application/json',
    'authorization': token
  }
});

export default api;