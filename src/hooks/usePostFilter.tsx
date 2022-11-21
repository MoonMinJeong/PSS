import { ChangeEvent, useState } from 'react';
import { SortType } from '../apis/notice';
import { FilterState } from '../components/Filter';

const usePostFilter = () => {
    const [filter, setFilter] = useState<FilterState>({
        sort: 'like',
        keyword: '',
        min_star_point: 0,
    });
    const [filterOpened, setFilterOpened] = useState(false);
    const onChangeSortType = (sort: SortType) => {
        setFilter({
            ...filter,
            sort,
        });
    };
    const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
        setFilter({
            ...filter,
            keyword: e.target.value,
        });
    };
    const changeFilterStatus = () => {
        setFilterOpened(!filterOpened);
    };
    return {
        filter,
        setFilter,
        changeFilterStatus,
        onChangeSortType,
        onChangeKeyword,
        filterOpened,
        setFilterOpened,
    };
};

export default usePostFilter;
