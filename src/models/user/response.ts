export interface GetGithubUser {
    access_token: string;
    refresh_token: string;
    Authority: string;
}

interface UserData {
    id: string;
    nickname: string;
    image_url: string;
}

export interface GetUserResponse {
    list: UserData[];
}
