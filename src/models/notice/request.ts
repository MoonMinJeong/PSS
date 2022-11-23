export interface PostRequest {
    title: string;
    content: string;
    image_url: string;
    stacks: string[];
    nicknames: string[];
}

export interface SavePostRequest {
    title: string,
    content: string;
    image_url: string;
}
