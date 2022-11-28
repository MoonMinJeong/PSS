import styled from '@emotion/styled';
import OutsideClickHandler from 'react-outside-click-handler';
import meatballMenu from '../../assets/postDetail/meatballmenu.svg';
import Image from 'next/image';
import Profile from './Profile';
import { useState } from 'react';
import Menulist from './Menulist';
import usePostDetail from '../../hooks/usePostDetail';
import { useQuery } from 'react-query';
import { getMemoirPost } from '../../apis/notice';
import { GetMemorialPostDetailResponse } from '../../models/notice/response';

interface Props {
    postDetail: GetMemorialPostDetailResponse;
}

const PostSummary = ({ postDetail }: Props) => {
    const [menulistOpened, setMenulistOpened] = useState(false);
    return (
        <_PostSummaryContainer>
            <_TitleBox>
                <p>{postDetail?.title}</p>
                {postDetail?.is_mine && (
                    <div>
                        <Image
                            src={meatballMenu}
                            alt="미트볼 메뉴"
                            height={24}
                            width={24}
                            onClick={() => setMenulistOpened(!menulistOpened)}
                        />
                        {menulistOpened && (
                            <OutsideClickHandler onOutsideClick={() => setMenulistOpened(false)}>
                                <Menulist />
                            </OutsideClickHandler>
                        )}
                    </div>
                )}
            </_TitleBox>
            <Profile
                writerName={postDetail?.name!}
                profile={postDetail?.profile_image!}
                createTime={postDetail?.create_time!}
            />
        </_PostSummaryContainer>
    );
};

const _PostSummaryContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    > p {
        color: ${({ theme }) => theme.color.gray700};
        margin-left: 14px;
    }
`;

const _TitleBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    > p {
        font-size: 32px;
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.bold};
        margin-right: 16px;
    }
    > div > span {
        margin-top: 4px;
        cursor: pointer;
    }
`;

export default PostSummary;
