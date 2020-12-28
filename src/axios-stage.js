import axios from 'axios';

const instance = axios.create({
    baseURL: '/api/Jobs'
});

export default instance;