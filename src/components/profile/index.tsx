import styled from '@emotion/styled';
import UserInfo from './UserInfo';
import PostList from '../post/PostList';

interface Props {
    isMine: boolean;
}

const ProfileTemplate = ({ isMine }: Props) => {
    return (
        <_Wrapper>
            <UserInfo />
            <_Count>
                HYE YEON님의 기록 총&nbsp;<p>2</p>개
            </_Count>
            <PostList postList={[]} marginTop={36} />
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
