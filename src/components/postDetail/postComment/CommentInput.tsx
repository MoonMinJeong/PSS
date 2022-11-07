import styled from '@emotion/styled';
import CommentButtonBox from './CommentButtonBox';
import TextareaAutosize from 'react-textarea-autosize';

interface Props {
    count?: number;
    placeholder: string;
    isCancel: boolean;
    onCancel: () => void;
}

const CommentInput = ({ count, placeholder, isCancel, onCancel }: Props) => {
    return (
        <_CommentInputContainer>
            {count && <_Label>{count}개의 댓글</_Label>}
            <TextareaAutosize placeholder={placeholder} />
            <CommentButtonBox isCancel={isCancel} onCancel={onCancel} />
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

const _Textarea = styled.textarea<{ height: string }>`
    margin-bottom: 12px;
    width: 100%;
    height: ${({ height }) => height};
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
`;

export default CommentInput;
