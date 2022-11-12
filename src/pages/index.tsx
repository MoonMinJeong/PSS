import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/PostList';

const MainPage = () => {
    return (
        <_Wrapper>
            <Filter />
            <PostList />
        </_Wrapper>
    );
};

export default MainPage;

const _Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;