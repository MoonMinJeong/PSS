import Image from 'next/image';
import mainImage from '../../assets/dummy/mainImage.svg';
import Tag from '../common/Tag';
import { heartIcon, starIcon, viewIcon } from '../../assets';
import styled from '@emotion/styled';
import profile from '../../assets/dummy/profile.svg';
import { howLong } from '../../utils/translate';
import { NoticeCardData } from '../../models/notice/response';
import Link from 'next/link';

interface PopularityItem {
    icon: string;
    name: 'likes' | 'view_count' | 'stars';
    alt: string;
}

const popularityArr: PopularityItem[] = [
    {
        icon: heartIcon,
        name: 'likes',
        alt: '하트',
    },
    {
        icon: starIcon,
        name: 'stars',
        alt: '별점',
    },
    {
        icon: viewIcon,
        name: 'view_count',
        alt: '조회수',
    },
];

interface PostCardItemProps {
    cardItem: NoticeCardData;
}

const PostCard = ({ cardItem }: PostCardItemProps) => {
    const createdTime = new Date(cardItem.create_time);
    return (
        <Link href={'/detail/' + cardItem.notice_id}>
            <_PostCard>
                <img src={cardItem.image_url} alt="대표 사진" />
                <h1 className="title">{cardItem.title}</h1>
                <p className="summary">{cardItem.introduction.slice(0, 20)}</p>
                <_TagList>
                    {cardItem.stacks.map((item, index) => (
                        <Tag text={item} key={index} />
                    ))}
                </_TagList>
                <_FlexWrapper>
                    <img src={cardItem.profile_image} alt={'프로필'} />
                    <p className="author">{cardItem.nickname}</p>
                    <p className="howLong">{howLong(createdTime)}</p>
                    {popularityArr.map((item, index) => (
                        <_Popularity key={index}>
                            <Image src={item.icon} alt="popularity" />
                            <p>{cardItem[item.name]}</p>
                        </_Popularity>
                    ))}
                </_FlexWrapper>
            </_PostCard>
        </Link>
    );
};

export default PostCard;

const _PostCard = styled.li`
    width: 342px;
    height: 400px;
    cursor: pointer;
    transition: margin-top 0.3s ease-in-out;
    :hover {
        margin-top: -16px;
    }
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
        text-overflow: ellipsis;
    }
    > .summary {
        margin-top: 6px;
        font-size: 16px;
        height: 46px;
        width: 100%;
        color: ${({ theme }) => theme.color.gray700};
    }
`;
const _FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    > span {
        user-select: none;
    }
    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
    > .author {
        margin-left: 6px;
        color: ${({ theme }) => theme.color.gray900};
        font-size: 14px;
        user-select: none;
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
    margin-top: 12px;
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
    > img {
        width: 20px;
        height: 20px;
        border-radius: 50%;
    }
`;
