import styled from '@emotion/styled';
import CommentButtonBox from './CommentButtonBox';
import TextareaAutosize from 'react-textarea-autosize';
import usePostDetail from '../../../hooks/usePostDetail';
import { useState } from 'react';

interface Props {
    placeholder: string;
    isCancel: boolean;
    onCancel: () => void;
    noticeId: string;
    commentId?: string;
    type: 'reply' | 'comment';
}

const CommentInput = ({ placeholder, isCancel, onCancel, noticeId, type, commentId }: Props) => {
    const [text, setText] = useState('');
    const { data: postDetail } = usePostDetail(noticeId);
    return (
        <_CommentInputContainer>
            {postDetail?.list !== undefined && type === 'comment' && (
                <_Label>{postDetail.list.length}개의 댓글</_Label>
            )}
            <TextareaAutosize
                placeholder={placeholder}
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <CommentButtonBox
                type={type}
                text={text}
                isCancel={isCancel}
                onCancel={onCancel}
                noticeId={noticeId}
                commentId={commentId}
            />
        </_CommentInputContainer>
    );
};

const _CommentInputContainer = styled.div`
    position: relative;
    width: 100%;
    > textarea {
        margin-bottom: 12px;
        width: 100%;
        font-size: 16px;
        border-radius: 12px;
        resize: none;
        border: 1px solid ${({ theme }) => theme.color.gray500};
        padding: 20px;
        ::placeholder {
            color: ${({ theme }) => theme.color.gray700};
        }
        :focus {
            border: 1px solid ${({ theme }) => theme.color.main};
        }
    }
`;

const _Label = styled.p`
    font-size: 18px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.color.gray900};
    font-weight: ${({ theme }) => theme.font.medium};
`;

export default CommentInput;
