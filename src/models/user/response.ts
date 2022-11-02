interface UserData {
    id: string;
    nickname: string;
    image_url: string;
}

export interface GetUserResponse {
    list: UserData[];
}
