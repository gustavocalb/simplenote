import axios from 'axios';

const api = axios.create({
  baseURL: 'https://simplenote.vercel.app',
});

export default api;