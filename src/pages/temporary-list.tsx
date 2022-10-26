import styled from '@emotion/styled';
import Title from '../components/common/Title';
import PostList from '../components/post/PostList';

const TemporaryList = () => {
    return (
        <_Wrapper>
            <Title type="like" name="HYE YEON" count={4} />
            <PostList postList={[]} marginTop={36} />
        </_Wrapper>
    );
};
export default TemporaryList;

const _Wrapper = styled.div`
    width: 1100px;
    margin: 0 auto;
    > h1 {
        margin-top: 100px;
    }
`;
