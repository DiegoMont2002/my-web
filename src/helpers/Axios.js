import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-api-web.onrender.com/api/',
});

export default instance;
