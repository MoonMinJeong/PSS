import { GetPostResponce } from '../models/profile/responce';
import { instance } from './customAxios';

export const getSavePost = async () => {
    return await instance.get<GetPostResponce>('/profile/save');
};

export const getLikePost = async () => {
    return await instance.get<GetPostResponce>('/profile/like');
};

export const getMyPost = async () => {
    return await instance.get<GetPostResponce>('/profile/my');
};
