interface PostData {
    notice_id: string;
    title: string;
    image_url: string;
    introduction: string;
    stacks: string[];
    view_count: number;
    stars: number;
    likes: number;
    nickname: string;
    profile_image: string;
    create_time: Date;
    mine: boolean;
}

export interface GetPostResponce {
    notice_list: PostData[];
    profile_image: string;
    nickname: string;
    email: string;
    notice_count: number;
}
