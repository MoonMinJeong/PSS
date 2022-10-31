import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import profile from '../../../assets/dummy/profile.svg';
import { howLong } from '../../../utils/translate';
import Reply from './Reply';
import ReplyManage from './ReplyManage';

interface Props {
    writerName: string;
    content: string;
}

const oneDayAGo = new Date(2022, 9, 20, 16, 54, 0); //month에 +1

const Comment = ({ writerName, content }: Props) => {
    return (
        <_CommentContainer>
            <_ProfileBox>
                {/* TODO. Profile Link 추가 */}
                <Image src={profile} alt="작성자 프로필" width={28} height={28} />
                <p className="writer">{writerName}</p>
                <p className="howLong">{howLong(oneDayAGo)}</p>
            </_ProfileBox>
            <p>{content}</p>
            <ReplyManage count={2} />
        </_CommentContainer>
    );
};

const _ProfileBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    > .writer {
        font-size: 16px;
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.medium};
    }
    > .howLong {
        font-size: 14px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;

const _CommentContainer = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    > p {
        margin: 16px 0 18px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.black};
    }
`;

export default Comment;
