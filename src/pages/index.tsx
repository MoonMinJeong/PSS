import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/post/PostList';
import Banner from '../components/Banner';
import { useQuery } from 'react-query';
import { getPostList } from '../apis/notice';
import usePostFilter from '../hooks/usePostFilter';

const MainPage = () => {
    const {
        filter,
        changeFilterStatus,
        onChangeKeyword,
        onChangeSortType,
        filterOpened,
        setFilter,
    } = usePostFilter();
    const { data: postList } = useQuery(
        ['postlist', filter.sort, filter.min_star_point, filter.keyword],
        () => getPostList(filter.sort, filter.min_star_point, filter.keyword),
    );
    return (
        <_Wrapper>
            <Banner />
            <Filter
                filter={filter}
                changeFilterStatus={changeFilterStatus}
                onChangeKeyword={onChangeKeyword}
                onChangeSortType={onChangeSortType}
                filterOpened={filterOpened}
                setFilter={setFilter}
            />
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
