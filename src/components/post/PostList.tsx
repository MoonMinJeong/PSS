import styled from '@emotion/styled';
import PostCard from './PostCard';

interface Props {
    postList: any[];
    marginTop: number;
}

const PostList = ({ postList, marginTop }: Props) => {
    return (
        <_Wrapper marginTop={marginTop}>
            {Array(10)
                .fill(void 0)
                .map((_, index) => (
                    <PostCard key={index} />
                ))}
        </_Wrapper>
    );
};
export default PostList;

const _Wrapper = styled.ul<{ marginTop: number }>`
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
    gap: 48px 36px;
    margin-top: ${({ marginTop }) => marginTop}px;
`;
