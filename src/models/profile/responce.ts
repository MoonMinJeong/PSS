<<<<<<< HEAD
import { NoticeCardData } from "../notice/response";
=======
import { NoticeCardData } from '../notice/response';
>>>>>>> 18-pub-temp-post

export interface GetPostResponce {
    notice_list: NoticeCardData[];
    profile_image: string;
    nickname: string;
    email: string;
    notice_count: number;
}
