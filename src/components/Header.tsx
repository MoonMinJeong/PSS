import styled from '@emotion/styled';
import Link from 'next/link';
import { ArrowIcon } from '../assets';
import DropdownItem, { DropDownItem } from './common/DropdownItem';
import { useEffect, useMemo, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
import { useRouter } from 'next/router';
import LoginModal from './login/LoginModal';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { getMyPost } from '../apis/profile';
import Image from 'next/image';
import logo from '../assets/logo.png';

export default function Header() {
    const router = useRouter();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [openModal, setOpenModal] = useState<boolean>(false);
    useEffect(() => {
        setIsLogin(localStorage.getItem('access_token') !== null);
    }, []);
    const { data } = useQuery(['getMyProfile', isLogin], () => getMyPost(), {
        onSuccess: () => {
            setIsLogin(true);
        },
        onError: () => {
            setIsLogin(false);
        },
    });
    const [dropdownOpened, setDropdownOpened] = useState(false);
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
                    router.push('/save');
                },
            },
            {
                summary: '저장항목',
                onClickFunction: () => {
                    router.push('/like');
                },
            },
            {
                summary: '로그아웃',
                onClickFunction: () => {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    setIsLogin(false);
                },
                isRed: true,
            },
        ];
    }, []);
    const profileImage = useMemo(() => {
        return (
            data && (
                <Image
                    src={data.profile_image}
                    width={36}
                    height={36}
                    style={{
                        borderRadius: '50%',
                    }}
                />
            )
        );
    }, [data]);
    const headerItem = useMemo(
        () =>
            isLogin ? (
                <>
                    <Link href={'/write'}>
                        <_WritePost>소개글 작성하기</_WritePost>
                    </Link>
                    <_ProfileWrapper>
                        {profileImage}
                        <button onClick={() => setDropdownOpened(!dropdownOpened)}>
                            <ArrowIcon />
                        </button>
                        {dropdownOpened && (
                            <OutsideClickHandler onOutsideClick={() => setDropdownOpened(false)}>
                                <DropdownItem items={dropdownItems} />
                            </OutsideClickHandler>
                        )}
                    </_ProfileWrapper>
                </>
            ) : (
                <_LoginButton
                    onClick={() => {
                        setOpenModal(true);
                    }}>
                    LOGIN
                </_LoginButton>
            ),
        [isLogin, dropdownOpened, profileImage],
    );
    return (
        <>
            <_Filler>
                <_Wrapper>
                    <_Content>
                        <Link href={'/'}>
                            <img src={logo.src} />
                        </Link>
                        <p>자신만의 프로젝트 보고서를 작성해보세요!</p>
                        <i></i>
                        {headerItem}
                    </_Content>
                    {openModal && <LoginModal setOpenModal={setOpenModal} />}
                </_Wrapper>
            </_Filler>
        </>
    );
}

export async function getServerSideProps() {
    const queryClient = new QueryClient();
    await queryClient.prefetchQuery(['getMyProfile'], () => getMyPost());
    return { props: { dehydratedState: dehydrate(queryClient) } };
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
    width: 1080px;
    margin: 0 auto;
    > img {
        cursor: pointer;
        height: 24px;
        user-select: none;
        margin-top: 4px;
        margin-right: 24px;
    }
    > p {
        font-size: 18px;
        margin-top: 10px;
        user-select: none;
        color: ${({ theme }) => theme.color.gray700};
    }
    > i {
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

const _LoginButton = styled.button`
    font-size: 20px;
`;
