import { ReplyRequest } from '../models/reply/request';
import { instance } from './customAxios';

export const writeReply = async (body: ReplyRequest, comment_id: string) => {
    await instance.post(`/reply/${comment_id}`, body);
};

export const deleteReply = async (reply_id: string) => {
    await instance.delete(`/reply/${reply_id}`);
};
