import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/post/PostList';
import Banner from '../components/Banner';

const MainPage = () => {
    return (
        <_Wrapper>
            <Banner />
            <Filter />
            <PostList postList={[]} marginTop={40} />
        </_Wrapper>
    );
};

export default MainPage;

const _Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
`;