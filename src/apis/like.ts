import { instance } from './customAxios';

export const like = async (notice_id: string) => {
    await instance.post(`/like/${notice_id}`);
};

export const cancelLike = async (notice_id: string) => {
    await instance.delete(`/like/${notice_id}`);
};
