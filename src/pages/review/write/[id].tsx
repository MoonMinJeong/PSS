import { GetServerSideProps, NextPage } from 'next';
import styled from '@emotion/styled';
import InputSession from '../../../components/write/PutInfoWrite';
import { Editor } from '../../../components/write/Editor';
import FootMenu from '../../../components/write/footMenu';
import ModalWrite from '../../../components/write/ModalWrite';
import PreView from '../../../components/write/Preview';
import { useState } from 'react';
import { PostRequest } from '../../../models/notice/request';
import { getPostDetail } from '../../../apis/notice';
import { useQuery } from 'react-query';

interface Props {
    id: string;
}

const Review: NextPage<Props> = ({ id }) => {
    const [modal, setModal] = useState<boolean>(false);

    const [content, setContent] = useState<PostRequest>({
        title: '',
        content: '',
        stacks: [],
        nicknames: [],
        image_url: '',
    });
    const {} = useQuery(['/notice', id], () => getPostDetail(id), {
        onSuccess: (res) => {
            setContent({
                title: res.title,
                stacks: res.stacks,
                nicknames: res.nicknames,
                content: '',
                image_url: res.profile_image,
            });
        },
    });
    return (
        <_Wrapper>
            <_InputWrapper>
                <InputSession Introduct={content} setIntroduct={setContent} />
                <_EditorBox>
                    <Editor Introduct={content} setIntroduct={setContent} />
                </_EditorBox>
                <FootMenu id={id} reviewContent={content} isReview setModal={setModal} />
                <ModalWrite
                    setModal={setModal}
                    setIntroduct={setContent}
                    Introduct={content}
                    modal={modal}
                />
            </_InputWrapper>
            <PreView modal={modal} setModal={setModal} Introduct={content} />
        </_Wrapper>
    );
};
export default Review;

export const getServerSideProps: GetServerSideProps<{ id: string | string[] | undefined }> = async (
    ctx,
) => {
    const { params } = ctx;
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
