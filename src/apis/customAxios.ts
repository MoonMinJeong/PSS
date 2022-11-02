import axios from 'axios';

export const instance = axios.create({
    baseURL: 'baseUrl',
    timeout: 10000,
});
