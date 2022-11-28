import styled from '@emotion/styled';
import { CommentData } from '../../../models/notice/response';
import Profile from '../Profile';
import CommentDelete from './CommentDelete';
import ReplyManage from './ReplyManage';

const Comment = ({
    content,
    nickname,
    image_url,
    created_at,
    reply_dto_list,
    id,
    is_mine,
}: CommentData) => {
    return (
        <_CommentContainer>
            <Profile writerName={nickname} profile={image_url} createTime={new Date(created_at)} />
            {is_mine && <CommentDelete type="comment" commentId={id} />}
            <p>{content}</p>
            <ReplyManage replyData={reply_dto_list} commentId={id} />
        </_CommentContainer>
    );
};

const _CommentContainer = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    margin-bottom: 24px;
    position: relative;
    > p {
        margin: 16px 0 18px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.black};
    }
`;

export default Comment;
