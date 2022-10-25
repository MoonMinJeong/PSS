import dynamic from 'next/dynamic';
import { IntroductType } from '../../../pages/write';

const NoSsrEditor = dynamic(() => import('./SetEditor'), { ssr: false });
const NoSsrViewer = dynamic(() => import('./SetViewer'), { ssr: false });

export interface EditorType {
    Introduct: IntroductType;
    setIntroduct: (Introduct: IntroductType) => void;
}

export interface ViewerType{
    content: string;
}

export function Editor({ Introduct, setIntroduct }: EditorType) {
    return <NoSsrEditor Introduct={Introduct} setIntroduct={setIntroduct} />;
}

export function Viewer({content}: ViewerType) {
    return <NoSsrViewer content={content}/>;
}