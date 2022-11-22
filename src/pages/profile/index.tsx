import ProfileTemplate from '../../components/profile';
import { useQuery } from 'react-query';
import { getMyPost } from '../../apis/profile';

const MyPage = () => {
    const { data } = useQuery(['getMyProfile'], () => getMyPost());
    return <ProfileTemplate isMine={true} {...data!!} />;
};
export default MyPage;
