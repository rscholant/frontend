import axios from 'axios';

const api = axios.create({
    baseURL: 'https://scholant.herokuapp.com',
});

export default api;