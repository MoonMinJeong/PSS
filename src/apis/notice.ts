import { PostRequest, SavePostRequest } from '../models/notice/request';
import {
    GetMemorialPostDetailResponse,
    GetPostDetailResponse,
    GetPostListResponse,
} from '../models/notice/response';
import { instance } from './customAxios';

export const writePost = async (body: PostRequest) => {
    await instance.post('/notice', body);
};

export const modifyPost = async (body: PostRequest, notice_id: string) => {
    await instance.put(`/notice/${notice_id}`, body);
};

export const deletePost = async (notice_id: string) => {
    await instance.delete(`/notice/${notice_id}`);
};

export type SortType = 'like' | 'time';

export const getPostList = async (sort: SortType, star: number, title: string) => {
    return (
        await instance.get<GetPostListResponse>(`/notice?sort=${sort}&star=${star}&title=${title}`)
    ).data;
};

export const getPostDetail = async (notice_id: string) => {
    return (await instance.get<GetPostDetailResponse>(`/notice/${notice_id}`)).data;
};

export const savePost = (body: PostRequest) => {
    return instance.post('/notice/save', body);
};

export const memoirPost = async (body: PostRequest, notice_id: string) => {
    await instance.post(`/notice/review/${notice_id}`, body);
};

export const getMemoirPost = async (notice_id: string) => {
    const { data } = await instance.get<GetMemorialPostDetailResponse>(
        `/notice/review/${notice_id}`,
    );
    return data;
};
