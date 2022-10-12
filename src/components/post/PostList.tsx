import styled from '@emotion/styled';
import PostCard from './PostCard';

interface Props {
    postList: any[];
}

const PostList = () => {
    return (
        <_Wrapper>
            {Array(10)
                .fill(void 0)
                .map((_, index) => (
                    <PostCard key={index} />
                ))}
        </_Wrapper>
    );
};
export default PostList;

const _Wrapper = styled.ul`
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
    gap: 48px 36px;
    margin-top: 28px;
`;
