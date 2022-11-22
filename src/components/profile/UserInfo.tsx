import styled from '@emotion/styled';
import Image from 'next/image';
import { githubIcon } from '../../assets';

interface Props {
    name: string;
    email: string;
    profile_image: string;
}

const UserInfo = ({ name, email, profile_image }: Props) => {
    return (
        <_Wrapper>
            <img src={profile_image} alt="프로필" width={190} height={190} />
            <_Summary>
                <div className="name">
                    {name}
                    <button>
                        <Image src={githubIcon} alt="github" />
                    </button>
                </div>
                <p className="email">{email}</p>
            </_Summary>
        </_Wrapper>
    );
};
export default UserInfo;

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin: 91px 0 74px 0;
    width: 190px;
    height: 190px;
    border-radius: 50%;

    > img {
        margin-right: 36px;
        border-radius: 50%;
    }
`;

const _Summary = styled.div`
    > .name {
        font-size: 48px;
        font-weight: 500;
        color: ${({ theme }) => theme.color.black};
        display: flex;
        > button {
            margin-left: 12px;
        }
    }
    > .email {
        font-size: 24px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;
