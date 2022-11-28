export interface NoticeCardData {
    notice_id: string;
    title: string;
    image_url: string;
    introduction: string;
    stacks: string[];
    view_count: number;
    stars: number;
    nickname: string;
    profile_image: string;
    create_time: string;
    mine: boolean;
    likes: number;
}

export interface GetPostListResponse {
    notice_list: NoticeCardData[];
}

export interface ReplyData {
    id: string;
    nickname: string;
    content: string;
    image_url: string;
    is_mine: boolean;
    created_at: string;
}

export interface CommentData {
    id: string;
    nickname: string;
    content: string;
    image_url: string;
    is_mine: boolean;
    created_at: string;
    reply_dto_list?: ReplyData[];
}

export interface GetPostDetailResponse extends GetMemorialPostDetailResponse {
    is_reviewed: boolean | null;
    review_id: string;
    list?: CommentData[];
}
export interface GetMemorialPostDetailResponse {
    notice_id: string;
    name: string;
    title: string;
    content: string;
    likes: number;
    stars: number;
    stacks: string[];
    nicknames: string[];
    view_count: number;
    my_star: number;
    is_mine: boolean;
    is_like: boolean;
    is_star: boolean;
    profile_image: string;
    create_time: Date;
}
