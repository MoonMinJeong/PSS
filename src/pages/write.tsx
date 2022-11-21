import styled from '@emotion/styled';
import { useState } from 'react';
import FootMenu from '../components/write/FootMenu';
import InputSession from '../components/write/PutInfoWrite';
import PreView from '../components/write/Preview';
import ModalWrite from '../components/write/ModalWrite';
import { Editor } from '../components/write/Editor';
import { PostRequest } from '../models/notice/request';

function WritePost() {
    const [modal, setModal] = useState<boolean>(false);

    const [Introduct, setIntroduct] = useState<PostRequest>({
        title: '',
        stacks: [],
        nicknames: [],
        content: '',
        image_url: '',
    });

    return (
        <_Wrapper>
            <_InputWrapper>
                <InputSession Introduct={Introduct} setIntroduct={setIntroduct} />
                <_EditorBox>
                    <Editor Introduct={Introduct} setIntroduct={setIntroduct} />
                </_EditorBox>
                <FootMenu setModal={setModal} />
                <ModalWrite
                    setModal={setModal}
                    setIntroduct={setIntroduct}
                    Introduct={Introduct}
                    modal={modal}
                />
            </_InputWrapper>
            <PreView modal={modal} setModal={setModal} Introduct={Introduct} />
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

const _EditorBox = styled.div`
    height: 500px;
`;

export default WritePost;
