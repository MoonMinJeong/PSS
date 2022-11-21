import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/post/PostList';
import Banner from '../components/Banner';
import { useQuery } from 'react-query';
import { getPostList } from '../apis/notice';

const MainPage = () => {
    const { data: postList } = useQuery(['postlist'], () => getPostList('like', 0, ''));
    console.log(postList);
    return (
        <_Wrapper>
            <Banner />
            <Filter />
            <PostList postList={postList?.data.notice_list || []} marginTop={40} />
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
