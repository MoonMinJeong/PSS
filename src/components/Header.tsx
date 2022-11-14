import styled from '@emotion/styled';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowIcon } from '../assets';
import icon from '../assets/dummy/profile.svg';
import DropdownItem, { DropDownItem } from './common/DropdownItem';
import { useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from 'next/router';

export default function Header() {
    const router = useRouter();
    const dropdownItems: DropDownItem[] = useMemo(() => {
        return [
            {
                summary: '프로필',
                onClickFunction: () => {
                    router.push('/profile');
                },
            },
            {
                summary: '임시저장',
                onClickFunction: () => {
                    console.log('임시저장');
                },
            },
            {
                summary: '저장항목',
                onClickFunction: () => {
                    console.log('저장항목');
                },
            },
            {
                summary: '로그아웃',
                onClickFunction: () => {
                    console.log('로그아웃');
                },
                isRed: true,
            },
        ];
    }, []);
    const [dropdownOpened, setDropdownOpened] = useState(false);
    return (
        <_Filler>
            <_Wrapper>
                <_Content>
                    <p></p>
                    <Link href={'/write'}>
                        <_WritePost>소개글 작성하기</_WritePost>
                    </Link>
                    <_ProfileWrapper>
                        <Image src={icon} alt="프로필" width={36} height={36} />
                        <button onClick={() => setDropdownOpened(!dropdownOpened)}>
                            <ArrowIcon />
                        </button>
                        {dropdownOpened && (
                            <OutsideClickHandler onOutsideClick={() => setDropdownOpened(false)}>
                                <DropdownItem items={dropdownItems} />
                            </OutsideClickHandler>
                        )}
                    </_ProfileWrapper>
                </_Content>
            </_Wrapper>
        </_Filler>
    );
}
const _Filler = styled.header`
    padding-bottom: 54px;
`;
const _Wrapper = styled.div`
    z-index: 99;
    width: 100%;
    height: 54px;
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    align-items: center;
    position: fixed;
`;
const _Content = styled.div`
    display: flex;
    width: 1020px;
    margin: 0 auto;
    > p {
        margin-right: auto;
    }
`;
const _WritePost = styled.button`
    width: 160px;
    height: 36px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.white};
    font-size: 18px;
    font-weight: 500;
`;
const _ProfileWrapper = styled.label`
    margin-left: 44px;
    display: flex;
    align-items: center;
    position: relative;

    > button {
        margin-left: 8px;
    }
`;
