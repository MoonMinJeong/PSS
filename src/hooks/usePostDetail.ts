import { useQuery } from 'react-query';
import { getPostDetail } from '../apis/notice';

const usePostDetail = (noticeId: string) => {
    return useQuery(['/notice', noticeId], () => getPostDetail(noticeId));
};

export default usePostDetail;
