import { GetPostResponce } from '../models/profile/responce';
import { instance } from './customAxios';

export const getSavePost = () => {
    return instance.get<GetPostResponce>('/profile/save');
};

export const getLikePost = async () => {
    return (await instance.get<GetPostResponce>('/profile/like')).data;
};

export const getMyPost = async () => {
    return (await instance.get<GetPostResponce>('/profile/my')).data;
};
