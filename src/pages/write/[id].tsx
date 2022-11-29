import styled from '@emotion/styled';
import { useState } from 'react';
import FootMenu from '../../components/write/footMenu';
import InputSession from '../../components/write/PutInfoWrite';
import PreView from '../../components/write/Preview';
import ModalWrite from '../../components/write/ModalWrite';
import { Editor } from '../../components/write/Editor';
import { PostRequest } from '../../models/notice/request';
import { GetServerSideProps } from 'next';
import { useQuery } from 'react-query';
import { getPostDetail } from '../../apis/notice';
import React from 'react'

interface PropsType {
    id: string;
}

function WritePost({ id }: PropsType) {
    const [modal, setModal] = useState<boolean>(false);

    const [Introduct, setIntroduct] = useState<PostRequest>({
        title: '',
        stacks: [],
        nicknames: [],
        content: '',
        image_url: '',
    });
    useQuery(['/notice', id], () => getPostDetail(id), {
        onSuccess: (res) => {
            setIntroduct({
                title: res.title,
                stacks: res.stacks,
                nicknames: res.nicknames,
                content: res.content,
                image_url: res.profile_image,
            });
        },
    });

    return (
        <_Wrapper>
            <_InputWrapper>
                <InputSession Introduct={Introduct} setIntroduct={setIntroduct} />
                <_EditorBox>
                    <Editor Introduct={Introduct} setIntroduct={setIntroduct} />
                </_EditorBox>
                <FootMenu setModal={setModal} Introduct={Introduct} />
                <ModalWrite
                    setModal={setModal}
                    setIntroduct={setIntroduct}
                    Introduct={Introduct}
                    modal={modal}
                    id={id}
                />
            </_InputWrapper>
            <PreView modal={modal} setModal={setModal} Introduct={Introduct} />
        </_Wrapper>
    );
}

export const getServerSideProps: GetServerSideProps<{ id: string | string[] | undefined }> = async (
    context,
) => {
    const { params } = context;
    return {
        props: {
            id: params?.id,
        },
    };
};

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
