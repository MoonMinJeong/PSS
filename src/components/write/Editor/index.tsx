import dynamic from 'next/dynamic';
import { IntroductType } from '../../../pages/write';

const NoSsrEditor = dynamic(() => import('./Setting'), { ssr: false });

export interface EditorType {
    Introduct: IntroductType;
    setIntroduct: (Introduct: IntroductType) => void;
}

function Editor({ Introduct, setIntroduct }: EditorType) {
    return <NoSsrEditor Introduct={Introduct} setIntroduct={setIntroduct} />;
}

export default Editor;
