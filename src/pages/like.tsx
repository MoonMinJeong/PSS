import PostList from '../components/post/PostList';
import { useQuery } from 'react-query';
import { getLikePost, getMyPost } from '../apis/profile';
import styled from '@emotion/styled';

const Like = () => {
    const { data: myProfile } = useQuery(['getMyProfile'], () => getMyPost());
    const { data: likedPosts } = useQuery(['getLikedPosts'], getLikePost);
    return (
        <_Wrapper>
            <_Count>
                {myProfile?.nickname}님이 관심을 가진 글 총&nbsp;<p>{likedPosts?.notice_count}</p>개
            </_Count>
            {likedPosts?.notice_list.length ? (
                <PostList postList={likedPosts.notice_list || []} marginTop={36} />
            ) : (
                <h1>관심을 가진 글이 존재하지 않습니다.</h1>
            )}
        </_Wrapper>
    );
};
export default Like;

const _Wrapper = styled.div`
    width: 1320px;
    margin: 100px auto 0 auto;
    > h1 {
        margin-top: 30px;
    }
`;
const _Count = styled.strong`
    font-size: 32px;
    font-weight: 500;
    display: flex;
    color: ${({ theme }) => theme.color.black};

    > p {
        color: ${({ theme }) => theme.color.main};
        font-weight: 700;
    }
`;
