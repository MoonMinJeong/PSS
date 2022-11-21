import { useQuery } from 'react-query';
import { getPostList } from '../apis/notice';

export type SortType = 'like' | 'time';

const usePostList = (sort: SortType, star: number, title: string) => {
    return useQuery(['/notice', sort, star, title], () => getPostList(sort, star, title));
};

export default usePostList;
