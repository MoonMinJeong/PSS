import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { deleteComment } from '../../../apis/comment';
import { deleteReply } from '../../../apis/reply';
import Kebobmenu from '../../../assets/postDetail/kebobMenu.svg';

interface Props {
    type: 'reply' | 'comment';
    replyId?: string;
    commentId?: string;
}

const CommentDelete = ({ type, replyId, commentId }: Props) => {
    const [showlist, setShowlist] = useState<boolean>(false);
    const onClickDeleteButton = () => {
        type === 'comment' ? deleteComment(commentId as string) : deleteReply(replyId as string);
    };
    return (
        <_Container type={type}>
            <Image src={Kebobmenu} onClick={() => setShowlist(!showlist)} />
            {showlist && (
                <OutsideClickHandler onOutsideClick={() => setShowlist(false)}>
                    <button onClick={() => onClickDeleteButton()}>삭제하기</button>
                </OutsideClickHandler>
            )}
        </_Container>
    );
};

const _Container = styled.div<{ type: 'reply' | 'comment' }>`
    cursor: pointer;
    display: flex;
    position: absolute;
    top: ${({ type }) => (type === 'reply' ? 24 : 0)}px;
    right: ${({ type }) => (type === 'reply' ? 16 : 0)}px;
    flex-direction: column;
    align-items: flex-end;
    button {
        background-color: ${({ theme }) => theme.color.white};
        padding: 8px 12px;
        box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        cursor: pointer;
        font-size: 14px;
        user-select: none;
        color: ${({ theme }) => theme.color.systemRed};
    }
`;

export default CommentDelete;
