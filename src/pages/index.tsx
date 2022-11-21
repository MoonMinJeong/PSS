import Filter from '../components/Filter';
import styled from '@emotion/styled';
import PostList from '../components/post/PostList';
import Banner from '../components/Banner';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getGithubUser } from '../apis/user';

const MainPage = () => {
    const id = useRouter().query;
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
