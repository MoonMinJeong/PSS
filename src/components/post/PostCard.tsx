import Image from 'next/image';
import mainImage from '../../assets/dummy/mainImage.svg';
import Tag from '../common/Tag';
import { heartIcon, starIcon, viewIcon } from '../../assets';
import styled from '@emotion/styled';
import profile from '../../assets/dummy/profile.svg';
import { howLong } from '../../utils/translate';

interface PopularityItem {
    icon: string;
    name: 'heart_count' | 'view_count' | 'start_count';
    alt: string;
}

const popularityArr: PopularityItem[] = [
    {
        icon: heartIcon,
        name: 'heart_count',
        alt: '하트',
    },
    {
        icon: starIcon,
        name: 'start_count',
        alt: '별점',
    },
    {
        icon: viewIcon,
        name: 'view_count',
        alt: '조회수',
    },
];

interface PostCardItemProps {}

const oneDayAGo = new Date(2022, 9, 12, 22, 54, 0);

const PostCard = ({}: PostCardItemProps) => {
    const dummy = {
        heart_count: 178,
        start_count: 3.5,
        view_count: 10000,
    };
    return (
        <_PostCard>
            <Image src={mainImage} alt="대표 사진" />
            <h1 className="title">우리 프로젝트는~~~</h1>
            <p className="summary">
                프로젝트 소개? 이제는 여기서 하세요 ㅋ 최강 문정민 최강 프소서 최강 문정민 최강
                프소서 최강 문정민 최강 프소서
            </p>
            <_TagList>
                <Tag text={'Java'} />
                <Tag text={'Spring boot'} />
            </_TagList>
            <_FlexWrapper>
                <Image src={profile} />
                <p className="author">hyeyeonchurros</p>
                <p className="howLong">{howLong(oneDayAGo)}</p>
                {popularityArr.map((item) => (
                    <_Popularity>
                        <Image src={item.icon} />
                        <p>{dummy[item.name]}</p>
                    </_Popularity>
                ))}
            </_FlexWrapper>
        </_PostCard>
    );
};

export default PostCard;

const _PostCard = styled.li`
    width: 416px;
    height: 368px;
    cursor: pointer;
    > img {
        width: 100%;
        height: 240px;
        object-fit: cover;
    }
    > .title {
        font-size: 20px;
        font-weight: ${({ theme }) => theme.font.bold};
        color: ${({ theme }) => theme.color.black};
        margin-top: 12px;
    }
    > .summary {
        margin-top: 6px;
        font-size: 16px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;
const _FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    > .author {
        margin-left: 6px;
        color: ${({ theme }) => theme.color.gray900};
        font-size: 14px;
    }
    > .howLong {
        margin-left: 8px;
        font-size: 12px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;
const _TagList = styled.ul`
    width: 300px;
    display: flex;
    gap: 0 8px;
    overflow: scroll;
`;
const _Popularity = styled.div`
    display: flex;
    margin-left: 12px;
    > p {
        margin-left: 6px;
        font-size: 14px;
        line-height: 20px;
    }
    :first-of-type {
        margin-left: auto;
    }
`;
