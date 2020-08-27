import axios from 'axios';
const api = axios.create({ baseURL: process.env.REACT_APP_API_URL });

api.interceptors.request.use(config => {
  if (localStorage.getItem('token'))
    config.headers.Authorization = `Bearer ${localStorage.token}`;

  return config;
});

api.interceptors.response.use(null as any, error => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  return Promise.reject(error.response);
});

export default api;
