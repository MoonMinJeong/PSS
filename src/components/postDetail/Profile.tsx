import styled from '@emotion/styled';
import Image from 'next/image';
import { howLong } from '../../utils/translate';

interface Props {
    writerName: string;
    profile: string;
    createTime: Date;
}

const Profile = ({ writerName, profile, createTime }: Props) => {
    const oneDayAGo = new Date(createTime);
    return (
        <_ProfileBox>
            <CustomImage src={profile} width={28} height={28} />
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

const CustomImage = styled(Image)`
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 50%;
    font-size: 8px;
`;

export default Profile;
