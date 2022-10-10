import styled from '@emotion/styled';
import { useState } from 'react';
import FootMenu from '../components/write/FootMenu';
import InputSession from '../components/write/PutInfoWrite';
import PreView from '../components/write/Preview';
import ModalWrite from '../components/write/ModalWrite';
import Editor from '../components/write/Editor';

export interface IntroductType {
    title: string;
    skill: string[];
    attend: string[];
    content: string;
    shortIntro: string;
    mainImg: File | null | string;
}

function WritePost() {
    const [modal, setModal] = useState(false);

    const [Introduct, setIntroduct] = useState<IntroductType>({
        title: '',
        skill: [],
        attend: [],
        content: '',
        shortIntro: '',
        mainImg: null,
    });

    return (
        <_Wrapper>
            <_InputWrapper>
                <InputSession Introduct={Introduct} setIntroduct={setIntroduct} />
                <Editor Introduct={Introduct} setIntroduct={setIntroduct} />
                <FootMenu setModal={setModal} />
                <ModalWrite
                    setModal={setModal}
                    setIntroduct={setIntroduct}
                    Introduct={Introduct}
                    modal={modal}
                />
            </_InputWrapper>
            <PreView setModal={setModal} />
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
`;

const _InputWrapper = styled.div`
    width: 50%;
    padding: 20px 40px;
`;

export default WritePost;
