import { GetUserResponse } from '../models/user/response';
import { instance } from './customAxios';

export const getUserSearch = async (nickname: string) => {
    return await instance.get<GetUserResponse>(`/user?nickname=${nickname}`);
};
