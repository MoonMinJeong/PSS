import styled from '@emotion/styled';
import Image from 'next/image';
import profile from '../../assets/dummy/profile.svg';
import { howLong } from '../../utils/translate';

interface Props {
    writerName: string;
}

const oneDayAGo = new Date(2022, 9, 20, 16, 54, 0); //month에 +1

const Profile = ({ writerName }: Props) => {
    return (
        <_ProfileBox>
            {/* TODO. Profile Link 추가 */}
            <Image src={profile} alt="작성자 프로필" width={28} height={28} />
            <p className="writer">{writerName}</p>
            <p className="howLong">{howLong(oneDayAGo)}</p>
        </_ProfileBox>
    );
};

const _ProfileBox = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
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

export default Profile;
