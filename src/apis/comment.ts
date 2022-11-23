import { CommentRequest } from '../models/comment/request';
import { instance } from './customAxios';

export const writeComment = async (body: CommentRequest, comment_id: string) => {
    await instance.post(`/comment/${comment_id}`, body);
};

export const deleteComment = async (comment_id: string) => {
    await instance.delete(`/comment/${comment_id}`);
};
