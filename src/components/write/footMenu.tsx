import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { backPage } from '../../assets';
import { memoirPost } from '../../apis/notice';
import { useRouter } from 'next/router';
import { savePost } from '../../apis/notice';
import { PostRequest, SavePostRequest } from '../../models/notice/request';

interface PropsType {
    setModal: (modal: boolean) => void;
    Introduct?: PostRequest;
    isReview?: boolean;
    id?: string;
    reviewContent?: PostRequest;
}

function FootMenu({ setModal, Introduct, isReview, id, reviewContent }: PropsType) {
    const SetModal = () => setModal(true);
    const route = useRouter();
    const RequestObj = {
        title: Introduct?.title,
        content: Introduct?.content,
        image_url: Introduct?.image_url,
        nicknames: Introduct?.nicknames,
        stacks: Introduct?.stacks,
    };

    const savePoint = () => {
        savePost(RequestObj).then((res) => res && route.push('/'));
    };

    const onClickSubmitReview = () => {
        if (id && reviewContent) memoirPost(reviewContent, id);
    };
    return (
        <_Wrapper>
            <Link href="/">
                <_BackPageButton>
                    <Image src={backPage} />
                    나가기
                </_BackPageButton>
            </Link>

            <_SaveSummitBox>
                {isReview ? (
                    <_SummitButton onClick={onClickSubmitReview}>작성하기</_SummitButton>
                ) : (
                    <>
                        <_SaveButton onClick={savePoint}>임시저장</_SaveButton>

                        <_SummitButton onClick={SetModal}>작성하기</_SummitButton>
                    </>
                )}
            </_SaveSummitBox>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const _SummitButton = styled.button`
    border: none;
    width: 130px;
    height: 40px;
    margin-left: 20px;
    font-size: 16px;
    border-radius: 14px;
    font-weight: ${({ theme }) => theme.font.medium};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.main};
`;

const _BackPageButton = styled.button`
    font-size: 16px;
`;

const _SaveSummitBox = styled.div`
    font-weight: ${({ theme }) => theme.font.regular};
`;

const _SaveButton = styled.button`
    color: ${({ theme }) => theme.color.gray500};
    font-size: 16px;
    border: 0;
    outline: 0;
`;
export default FootMenu;
