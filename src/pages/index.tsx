import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/post/PostList';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getGithubUser } from '../apis/user';
import { useQuery } from 'react-query';
import { getPostList } from '../apis/notice';
import usePostFilter from '../hooks/usePostFilter';

const MainPage = () => {
  const id = useRouter().query;
  const {
        filter,
        changeFilterStatus,
        onChangeKeyword,
        onChangeSortType,
        filterOpened,
        setFilter,
    } = usePostFilter();
    useEffect(() => {
        const user = async () => {
            if (id.code) {
                const data = await getGithubUser(id.code as string);
                if (data) {
                    localStorage.setItem('access_token', data.access_token);
                    localStorage.setItem('refresh_token', data.refresh_token);
                }
            }
        };
        user();
    }, [id]);
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
