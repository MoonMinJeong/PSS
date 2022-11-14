import { instance } from './customAxios';
import { ImageResponse } from '../models/image/responce';

export const uploadImage = async (file: FormData) => {
    return await instance.post<ImageResponse>('/image', file);
};
