import styled from '@emotion/styled';
import profile from '../../assets/dummy/profile.svg';
import meatballMenu from '../../assets/postDetail/meatballmenu.svg';
import Image from 'next/image';
import { howLong } from '../../utils/translate';

interface Props {
    title: string;
    writerName: string;
}

const oneDayAGo = new Date(2022, 9, 17, 16, 54, 0);

const PostSummary = ({ title, writerName }: Props) => {
    return (
        <_PostSummaryContainer>
            <_TitleBox>
                <p>{title}</p>
                <Image src={meatballMenu} alt="미트볼 메뉴" height={24} width={24} />
            </_TitleBox>
            <div style={{ display: 'flex' }}>
                <_WriterProfile>
                    {/* TODO. Profile Link 추가 */}
                    <Image src={profile} alt="작성자 프로필" height={28} width={28} />
                    <p className="writer">{writerName}</p>
                    <p className="howLong">{howLong(oneDayAGo)}</p>
                </_WriterProfile>
            </div>
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
    > p {
        font-size: 32px;
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.bold};
        margin-right: 16px;
    }
    > span {
        cursor: pointer;
    }
`;

const _WriterProfile = styled.div`
    display: flex;
    align-items: center;
    margin-top: 12px;
    gap: 8px;
    cursor: pointer;
    > .writer {
        font-size: 16px;
        color: ${({ theme }) => theme.color.gray900};
    }
    > .howLong {
        font-size: 16px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;

export default PostSummary;
