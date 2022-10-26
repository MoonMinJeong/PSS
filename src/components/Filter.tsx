import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { filterIcon } from '../assets';
import SliderController from './SliderController';
import OutsideClickHandler from 'react-outside-click-handler';

type SortType = 'RECENTLY' | 'POPULARITY';

interface SortButtonArray {
    sort: SortType;
    summary: '인기순' | '최신순';
}

export interface FilterState {
    sort: SortType;
    keyword: string;
    min_star_point: number;
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
    return (
        <_Wrapper>
            {filterArray.map((item, index) => (
                <_SortButton
                    key={index}
                    isSelected={filter.sort === item.sort}
                    onClick={() => onChangeSortType(item.sort)}>
                    {item.summary}
                </_SortButton>
            ))}
            <_StarFilterWrapper>
                <button onClick={changeFilterStatus}>
                    <Image src={filterIcon} alt="별점필터" />
                </button>
                {filterOpened && (
                    <OutsideClickHandler onOutsideClick={changeFilterStatus}>
                        <SliderController filter={filter} setFilter={setFilter} />
                    </OutsideClickHandler>
                )}
            </_StarFilterWrapper>
            <_SearchInput
                placeholder="기술스택, 글 제목을 입력해보세요"
                value={filter.keyword}
                onChange={onChangeKeyword}
            />
        </_Wrapper>
    );
};
export default Filter;

const _Wrapper = styled.div`
    width: 1100px;
    display: flex;
    margin-top: 80px;
`;
const _SortButton = styled.button<{
    isSelected: boolean;
}>`
    width: 190px;
    height: 51px;
    font-size: 24px;
    font-weight: ${({ isSelected, theme }) => isSelected && theme.font.medium};
    color: ${({ theme, isSelected }) => (isSelected ? theme.color.main : theme.color.gray700)};
    border-bottom: ${({ theme, isSelected }) =>
        isSelected ? `3px solid ${theme.color.main}` : ''};
`;
const _StarFilterWrapper = styled.div`
    display: flex;
    position: relative;
    > div {
        position: absolute;
        right: 0;
        top: 40px;
        z-index: 99;
    }
    margin-left: auto;
`;
const _SearchInput = styled.input`
    width: 416px;
    height: 52px;
    margin-left: 20px;
    border: 2px solid ${({ theme }) => theme.color.gray500};
    border-radius: 20px;
    padding: 16px 24px 18px 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.black};

    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;
