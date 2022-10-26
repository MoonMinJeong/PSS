import styled from '@emotion/styled';
import Image from 'next/image';
import { githubIcon } from '../../assets';

const UserInfo = () => {
    return (
        <_Wrapper>
            <Image src={''} />
            <_Summary>
                <div className="name">
                    HYEYEON
                    <button>
                        <Image src={githubIcon} alt="github" />
                    </button>
                </div>
                <p className="email">hyeyeonchurros@naver.com</p>
            </_Summary>
        </_Wrapper>
    );
};
export default UserInfo;

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    margin-top: 91px;
    width: 190px;
    height: 190px;
    border-radius: 50%;

    > img {
        margin-right: 36px;
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
