import axios from 'axios';

const instance = axios.create({
    // FOR DEV
    //baseURL: 'http://localhost:5000/api/Jobs'
    baseURL: '/api/Jobs'
});

export default instance;