import styled from '@emotion/styled';

interface Props {
    isCancel: boolean;
    onCancel: () => void;
}

const CommentButtonBox = ({ isCancel, onCancel }: Props) => {
    return (
        <_ButtonContainer>
            {isCancel && <_CancelButton onClick={onCancel}>취소</_CancelButton>}
            <_WriteButton>작성하기</_WriteButton>
        </_ButtonContainer>
    );
};

const _ButtonContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;
`;

const _CancelButton = styled.button`
    height: 34px;
    padding: 8px 16px 6px;
    border-radius: 12px;
    font-size: 16px;
    margin-bottom: 12px;
    color: ${({ theme }) => theme.color.gray700};
    border: 1px solid ${({ theme }) => theme.color.gray700};
`;

const _WriteButton = styled.button`
    height: 34px;
    padding: 8px 16px 6px;
    border-radius: 12px;
    font-size: 16px;
    margin-left: 8px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.main};
`;

export default CommentButtonBox;
