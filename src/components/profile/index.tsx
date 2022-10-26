import styled from '@emotion/styled';
import UserInfo from './UserInfo';
import PostList from '../post/PostList';
import Title from '../common/Title';

interface Props {
    isMine: boolean;
}

const ProfileTemplate = ({ isMine }: Props) => {
    return (
        <_Wrapper>
            <UserInfo />
            <Title type="history" count={7} name={'HYE YEON'} />
            <PostList postList={[]} marginTop={36} />
        </_Wrapper>
    );
};

export default ProfileTemplate;

const _Wrapper = styled.div`
    width: 1100px;
    margin: 0 auto;
`;
