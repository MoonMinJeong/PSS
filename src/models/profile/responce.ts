import { NoticeCardData } from "../notice/response";

export interface GetPostResponce {
    notice_list: NoticeCardData[];
    profile_image: string;
    nickname: string;
    email: string;
    notice_count: number;
}
