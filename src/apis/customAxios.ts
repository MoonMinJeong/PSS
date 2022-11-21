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

instance.interceptors.response.use(
    function (response) {
        return response;
    },

    async (error: any) => {
        if (axios.isAxiosError(error) && error.response) {
            const { config, response } = error;
            if (response.status === 401 && window.localStorage.getItem('refresh_token')) {
                try {
                    window.localStorage.setItem('access_token', '');
                    window.location.pathname = '/';
                } catch (err: any) {
                    if (err.response.data.status === 401 || err.response.data.status === 403) {
                        window.localStorage.setItem('access_token', '');
                        window.location.pathname = '/';
                    }
                }
            } else if (axios.isAxiosError(error) && error.response) {
                const { response } = error;
                if (response.status === 403) {
                    window.localStorage.setItem('access_token', '');
                    window.location.pathname = '/';
                }
            } else return Promise.reject(error);
        }
    },
);
