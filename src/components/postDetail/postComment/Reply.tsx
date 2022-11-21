import styled from '@emotion/styled';
import { ReplyData } from '../../../models/notice/response';
import Profile from '../Profile';

{
    /*TODO. 자신 답글 삭제 기능 추가*/
}
const Reply = ({ nickname, content, image_url, created_at }: ReplyData) => {
    return (
        <_ReplyContainer>
            <Profile writerName={nickname} createTime={new Date(created_at)} profile={image_url} />
            <p>{content}</p>
        </_ReplyContainer>
    );
};

const _ReplyContainer = styled.div`
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 12px;
    width: 100%;
    margin: 12px 0;
    padding: 20px 20px 24px;
    > p {
        font-size: 16px;
        margin-top: 10px;
        color: ${({ theme }) => theme.color.gray900};
    }
`;

export default Reply;
