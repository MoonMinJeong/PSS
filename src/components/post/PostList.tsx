import styled from '@emotion/styled';
import PostCard from './PostCard';
import GoToTop from '../common/GoToTop';

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
            <GoToTop />
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
        top: 650px;
        right: 70px;
        > svg {
            width: 36px;
            height: 36px;
        }
    }
`;
