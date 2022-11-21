import styled from '@emotion/styled';
import PostCard from './PostCard';
import GoToTop from '../common/GoToTop';
import { NoticeCardData } from '../../models/notice/response';

interface Props {
    postList: NoticeCardData[];
    marginTop: number;
}

const PostList = ({ postList, marginTop }: Props) => {
    return (
        <_Wrapper marginTop={marginTop}>
            <GoToTop />
            {postList.map((item) => (
                <PostCard cardItem={item} key={item.notice_id} />
            ))}
        </_Wrapper>
    );
};
export default PostList;

const _Wrapper = styled.ul<{ marginTop: number }>`
    position: relative;
    width: 1100px;
    display: flex;
    flex-wrap: wrap;
    gap: 48px 36px;
    margin-top: ${({ marginTop }) => marginTop}px;
    > button {
        > svg {
            width: 48px;
            height: 48px;
        }
    }
`;
