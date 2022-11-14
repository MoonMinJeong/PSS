import styled from '@emotion/styled';
import Slider from 'rc-slider';
import { Dispatch, SetStateAction } from 'react';
import { FilterState } from './Filter';

interface Props {
    setFilter: Dispatch<SetStateAction<FilterState>>;
    filter: FilterState;
}

const SliderController = ({ filter, setFilter }: Props) => {
    const onChange = (value: number | number[]) => {
        if (!Array.isArray(value))
            setFilter({
                ...filter,
                min_star_point: value,
            });
    };
    return (
        <_Wrapper>
            <_Title>
                현재 설정 별점 <p>{filter.min_star_point}.0+</p>
            </_Title>
            <_SliderWrapper>
                <Slider max={4} dots={true} onChange={onChange} />
            </_SliderWrapper>
        </_Wrapper>
    );
};

export default SliderController;

const _Wrapper = styled.div`
    width: 272px;
    height: 110px;
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.25);
    padding: 30px 36px;
`;
const _Title = styled.h1`
    display: flex;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 700;
    width: 150px;
    color: ${({ theme }) => theme.color.black};
    > p {
        color: ${({ theme }) => theme.color.main};
        margin-left: auto;
    }
`;
const _SliderWrapper = styled.div`
    position: relative;
    margin-top: 12px;
    > .rc-slider {
        margin: auto 0 8px 0;

        > .rc-slider-track {
            height: 10px;
        }

        > .rc-slider-rail {
            height: 10px;
            background-color: ${({ theme }) => theme.color.gray500};
        }

        > .rc-slider-track {
            background-color: ${({ theme }) => theme.color.main};
        }

        > .rc-slider-handle {
            width: 22px;
            height: 22px;
            background-color: ${({ theme }) => theme.color.main};
            border: none;
            opacity: 1;
            margin-top: -6px;
        }

        > .rc-slider-handle-dragging {
            box-shadow: none;
            border: none;
        }
        > .rc-slider-step {
            margin-top: 2px;
            > span {
                width: 6px;
                height: 6px;
                border: none;
                :first-of-type {
                    margin-left: 5px;
                }
                :last-of-type {
                    left: 97.5% !important;
                }
            }
        }
    }
`;
const _Circle = styled.div<{
    left: number;
}>`
    position: absolute;
    width: 6px;
    height: 6px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 50%;
    top: 7px;
    z-index: 99;
    left: ${({ left }) => left}px;
`;
