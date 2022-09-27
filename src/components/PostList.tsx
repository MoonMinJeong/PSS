import styled from '@emotion/styled';
import { filterIcon, starIcon, viewIcon } from '../assets';
import Image from 'next/image';

interface Props {
    postList: any[];
}

const PostList = () => {
    return (
        <_Wrapper>
            {Array(10)
                .fill(void 0)
                .map((_) => (
                    <_PostCard>
                        <img src={filterIcon} />
                        <h1>우리 프로젝트는~~~</h1>
                        <p>
                            프로젝트 소개? 이제는 여기서 하세요 ㅋ 최강 문정민 최강 프소서 최강
                            문정민 최강 프소서 최강 문정민 최강 프소서
                        </p>
                        <_FlexWrapper>
                            <_TagList>
                                <_Tag>Java</_Tag>
                                <_Tag>Next</_Tag>
                            </_TagList>
                            <_SubInfo>
                                <Image src={starIcon} alt="별점" />
                                <p>3.5</p>
                            </_SubInfo>
                            <_SubInfo>
                                <Image src={viewIcon} alt="조회수" />
                                <p>10000</p>
                            </_SubInfo>
                        </_FlexWrapper>
                    </_PostCard>
                ))}
        </_Wrapper>
    );
};
export default PostList;

const _Wrapper = styled.ul`
    width: 1320px;
    display: flex;
    flex-wrap: wrap;
    gap: 48px 36px;
    margin-top: 28px;
`;
const _PostCard = styled.li`
    width: 416px;
    height: 368px;
    cursor: pointer;
    > img {
        width: 100%;
        height: 240px;
        object-fit: cover;
    }
    > h1 {
        font-size: 20px;
        font-weight: ${({ theme }) => theme.font.bold};
        color: ${({ theme }) => theme.color.black};
    }
    > p {
        font-size: 16px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;
const _FlexWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
`;
const _TagList = styled.ul`
    width: 300px;
    display: flex;
    gap: 0 8px;
    overflow: scroll;
`;
const _Tag = styled.li`
    height: 23px;
    padding: 0 12px;
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.font.medium};
    font-size: 12px;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 50px;
    display: flex;
    align-items: center;
`;
const _SubInfo = styled.div`
    display: flex;
    margin-left: auto;
    > p {
        margin-left: 6px;
        font-size: 14px;
        line-height: 20px;
    }
    :last-child {
        margin-left: 12px;
    }
`;
