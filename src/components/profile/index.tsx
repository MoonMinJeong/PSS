import styled from '@emotion/styled';
import PostList from '../post/PostList';
import UserInfo from './UserInfo';
import { GetPostResponce } from '../../models/profile/responce';
import { name } from 'next/dist/telemetry/ci-info';

interface Props extends GetPostResponce {
    isMine: boolean;
}

const ProfileTemplate = ({
    isMine,
    notice_count,
    nickname,
    profile_image,
    notice_list,
    email,
}: Props) => {
    return (
        <_Wrapper>
            {nickname && notice_list && (
                <>
                    <UserInfo profile_image={profile_image} name={nickname} email={email} />
                    <_Count>
                        {nickname}님의 기록 총&nbsp;<p>{notice_count}</p>개
                    </_Count>
                    <PostList postList={notice_list} marginTop={36} />
                </>
            )}
        </_Wrapper>
    );
};

export default ProfileTemplate;

const _Wrapper = styled.div`
    width: 1320px;
    margin: 0 auto;
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
