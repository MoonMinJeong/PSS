interface NoticeCardData {
    notice_id: string;
    title: string;
    image_url: string;
    introduction: string;
    stacks: string[];
    view_count: number;
    stars: number;
    nickname: string;
    profile_image: string;
    create_time: Date;
    mine: boolean;
}

export interface GetPostListResponse {
    notice_list: NoticeCardData[];
}

interface ReplyData {
    id: string;
    nickname: string;
    content: string;
    image_url: string;
    is_mine: boolean;
}

interface CommentData {
    id: string;
    nickname: string;
    content: string;
    image_url: string;
    is_mine: boolean;
    reply_dto_list?: ReplyData[];
}

export interface GetPostDetailResponse {
    notice_id: string;
    title: string;
    content: string;
    likes: number;
    stars: number;
    stacks: string[];
    nicknames: string[];
    view_count: number;
    my_star: number;
    profile_image: string;
    create_time: Date;
    list?: CommentData[];
    like: boolean;
    star: boolean;
    mine: boolean;
    reviewed: boolean;
}
