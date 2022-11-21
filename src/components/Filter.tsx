import styled from '@emotion/styled';
import FilterIcon from '../assets/FilterIcon';
import SliderController from './SliderController';
import OutsideClickHandler from 'react-outside-click-handler';
import { SortType } from '../apis/notice';
import usePostFilter from '../hooks/usePostFilter';
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

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
        sort: 'like',
        summary: '인기순',
    },
    {
        sort: 'time',
        summary: '최신순',
    },
];

interface Props {
    filter: FilterState;
    changeFilterStatus: () => void;
    onChangeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
    onChangeSortType: (sort: SortType) => void;
    filterOpened: boolean;
    setFilter: Dispatch<SetStateAction<FilterState>>;
}

const Filter = ({
    filter,
    onChangeKeyword,
    onChangeSortType,
    filterOpened,
    setFilter,
    changeFilterStatus,
}: Props) => {
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
                    <FilterIcon isClicked={filterOpened} />
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
        top: 48px;
        z-index: 99;
    }
    > button {
        :focus {
        }
    }
    margin-left: auto;
`;
const _SearchInput = styled.input`
    width: 416px;
    height: 52px;
    margin-left: 20px;
    border: 2px solid ${({ theme }) => theme.color.gray500};
    border-radius: 20px;
    padding: 20px 24px 18px 20px;
    font-size: 18px;
    color: ${({ theme }) => theme.color.black};
    :focus {
        border: 2px solid ${({ theme }) => theme.color.main};
    }
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;
