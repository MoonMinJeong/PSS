import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/post/PostList';
import Participant from '../components/postDetail/Participant';
import Rating from '../components/postDetail/Rating';
import HeartButton from '../components/postDetail/HeartButton';
import PostSummary from '../components/postDetail/PostSummary';
import Tag from '../components/common/Tag';
import PostDetail from './post-detail';
import Banner from '../components/Banner';

const MainPage = () => {
    return (
        <_Wrapper>
            <Banner />
            <Filter />
            <PostList postList={[]} marginTop={40} />
            <PostDetail />
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
