import { StarRequest } from '../models/star/request';
import { instance } from './customAxios';

export const writeStar = async (body: StarRequest, notice_id: string) => {
    await instance.post(`/star/${notice_id}`, body);
};

export const modifyStar = async (body: StarRequest, notice_id: string) => {
    await instance.put(`/star/${notice_id}`, body);
};
