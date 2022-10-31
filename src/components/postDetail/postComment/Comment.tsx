import styled from '@emotion/styled';
import Profile from '../Profile';
import ReplyManage from './ReplyManage';

interface Props {
    content: string;
}

const Comment = ({ content }: Props) => {
    return (
        <_CommentContainer>
            <Profile writerName="문정민" />
            <p>{content}</p>
            <ReplyManage count={2} />
        </_CommentContainer>
    );
};

const _CommentContainer = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    > p {
        margin: 16px 0 18px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.black};
    }
`;

export default Comment;
