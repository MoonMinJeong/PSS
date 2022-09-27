import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

type SortType = 'RECENTLY' | 'POPULARITY';

interface SortButtonArray {
    sort: SortType;
    summary: '인기순' | '최신순';
}

interface FilterState {
    sort: SortType;
    keyword: string;
}

const filterArray: SortButtonArray[] = [
    {
        sort: 'POPULARITY',
        summary: '인기순',
    },
    {
        sort: 'RECENTLY',
        summary: '최신순',
    },
];

const Filter = () => {
    const [filter, setFilter] = useState<FilterState>({
        sort: 'POPULARITY',
        keyword: '',
    });
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
    return (
        <_Wrapper>
            {filterArray.map((item) => (
                <_SortButton
                    isSelected={filter.sort === item.sort}
                    onClick={() => onChangeSortType(item.sort)}>
                    {item.summary}
                    <input onChange={(e) => onChangeKeyword(e)} />
                </_SortButton>
            ))}
        </_Wrapper>
    );
};
export default Filter;

const _Wrapper = styled.div`
    width: 1320px;
    display: flex;
`;
const _SortButton = styled.button<{
    isSelected: boolean;
}>`
    width: 190px;
    height: 51px;
    font-size: 24px;
    font-weight: ${({ isSelected, theme }) => isSelected && theme.font.medium};
    color: ${({ theme, isSelected }) => (isSelected ? theme.color.main : theme.color.grey700)};
    border-bottom: ${({ theme, isSelected }) =>
        isSelected ? `3px solid ${theme.color.main}` : ''};
`;
