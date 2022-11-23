import styled from '@emotion/styled';
import Image from 'next/image';
import { starIcon, viewIcon } from '../../assets';
import arrow from '../../assets/postDetail/arrow.svg';
import usePostDetail from '../../hooks/usePostDetail';
import Link from 'next/link';

interface Props {
    noticeId: string;
}

const SideInfo = ({ noticeId }: Props) => {
    const { data: postDetail } = usePostDetail(noticeId);
    return (
        <_SideinfoConatainer>
            <_SideinfoBox>
                <Image src={starIcon} alt="별점" width={16} />
                <p className="rating">{postDetail?.stars}</p>
                <Image src={viewIcon} alt="조회수" width={16} />
                <p>{postDetail?.view_count}</p>
            </_SideinfoBox>
            {postDetail?.is_reviewed ? (
                <Link href={`/review/${noticeId}`}>
                    <_Memoir>
                        <p>회고록 보러가기</p>
                        <Image src={arrow} alt="화살표" width={14} height={16} />
                    </_Memoir>
                </Link>
            ) : (
                postDetail?.is_mine && (
                    <Link href={`/review/write/${noticeId}`}>
                        <_Memoir>
                            <p>회고록 쓰러가기</p>
                            <Image src={arrow} alt="화살표" width={14} height={16} />
                        </_Memoir>
                    </Link>
                )
            )}
        </_SideinfoConatainer>
    );
};

const _SideinfoConatainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const _SideinfoBox = styled.div`
    display: flex;
    gap: 4px;
    > p {
        font-size: 16px;
        margin: 3px 0 0 4px;
        color: ${({ theme }) => theme.color.black};
    }
    > .rating {
        margin-right: 12px;
    }
`;

const _Memoir = styled.label`
    display: flex;
    user-select: none;
    margin-top: 8px;
    > p {
        color: ${({ theme }) => theme.color.gray700};
        font-size: 16px;
        margin: 2px 4px 0 0;
    }
    > span {
        width: 16px;
        height: 16px;
    }
`;

export default SideInfo;
