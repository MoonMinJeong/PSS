import axios, { AxiosError } from 'axios';

export const instance = axios.create({
    baseURL: 'http://15.165.239.36:8080',
    timeout: 10000,
});

instance.interceptors.request.use(
    async function (config) {
        const accessToken = window.localStorage.getItem('access_token');
        accessToken
            ? (config.headers = {
                  Authorization: `Bearer ${accessToken}`,
              })
            : null;
        return config;
    },
    function (error: AxiosError) {
        return Promise.reject(error);
    },
);
