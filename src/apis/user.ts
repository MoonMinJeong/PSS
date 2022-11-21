import { GetGithubUser, GetUserResponse } from '../models/user/response';
import { instance } from './customAxios';

export const getGithubUser = async (code: string) => {
    try {
        const data = await instance.get<GetGithubUser>(`/auth?code=${code}`);
        return data.data;
    } catch (e) {
        console.log(e);
    }
};

export const getUserSearch = async (nickname: string) => {
    return (await instance.get<GetUserResponse>(`/user?nickname=${nickname}`)).data;
};
