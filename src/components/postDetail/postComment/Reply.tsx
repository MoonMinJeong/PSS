import styled from '@emotion/styled';
import Image from 'next/image';
import profile from '../../../assets/dummy/profile.svg';
import { howLong } from '../../../utils/translate';

interface Props {
    text: string;
    writerName: string;
}

const oneDayAGo = new Date(2022, 9, 20, 16, 54, 0); //month에 +1

const Reply = ({ text, writerName }: Props) => {
    return (
        <_ReplyContainer>
            <_ProfileBox>
                {/* TODO. Profile Link 추가 */}
                <Image src={profile} alt="답글 프로필" width={28} height={28} />
                <p className="writer">{writerName}</p>
                <p className="howLong">{howLong(oneDayAGo)}</p>
            </_ProfileBox>
            <p>{text}</p>
        </_ReplyContainer>
    );
};

const _ReplyContainer = styled.div`
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 12px;
    width: 780px;
    margin: 12px 0;
    padding: 20px 20px 24px;
    > p {
        font-size: 16px;
        margin-top: 10px;
        color: ${({ theme }) => theme.color.gray900};
    }
`;

const _ProfileBox = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    cursor: pointer;
    > .writer {
        font-size: 16px;
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.medium};
    }
    > .howLong {
        font-size: 14px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;

export default Reply;
