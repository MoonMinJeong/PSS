import dynamic from 'next/dynamic';
import { Dispatch, SetStateAction } from 'react';
import { PostRequest } from '../../../models/notice/request';

const NoSsrEditor = dynamic(() => import('./SetEditor'), { ssr: false });
const NoSsrViewer = dynamic(() => import('./SetViewer'), { ssr: false });

export interface EditorType {
    Introduct: PostRequest;
    setIntroduct: Dispatch<SetStateAction<PostRequest>>;
}

export interface ViewerType {
    content: string;
}

export function Editor({ Introduct, setIntroduct }: EditorType) {
    return <NoSsrEditor Introduct={Introduct} setIntroduct={setIntroduct} />;
}

export function Viewer({ content }: ViewerType) {
    return <NoSsrViewer content={content} />;
}
