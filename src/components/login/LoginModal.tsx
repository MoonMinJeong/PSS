import styled from '@emotion/styled';
import Button from './Button';
import Github from '../../assets/login/github.png';
import Google from '../../assets/login/google.png';
import LoginBackGround from '../../assets/login/loginBackground.png';
import CloseIcon from '../../assets/login/close.png';

const LoginModal = () => {
    return (
        <_ModalBackground>
            <_ModalContainer>
                <_ImageWrapper />
                <_ContentContainer>
                    <h1>LOGIN</h1>
                    <p>로그인 후 프소서의 서비스를 이용해보세요!</p>
                    <Button
                        text="Github로 로그인"
                        img={Github.src}
                        backgroundColor={'#000000'}
                        color={'#FFFFFF'}
                        onClick={() => {}}
                    />
                    <Button
                        text="Google로 로그인"
                        img={Google.src}
                        backgroundColor={'#FFFFFF'}
                        color={'#8D8D8D'}
                        onClick={() => {}}
                    />
                    <img src={CloseIcon.src} />
                </_ContentContainer>
            </_ModalContainer>
        </_ModalBackground>
    );
};

const _ModalBackground = styled.div`
    background-color: rgba(0, 0, 0, 0.3);
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const _ImageWrapper = styled.div`
    background-image: url(${LoginBackGround.src});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 300px;
`;

const _ContentContainer = styled.div`
    display: flex;
    width: 500px;
    margin-top: 108px;
    flex-direction: column;
    align-items: center;
    > h1 {
        color: ${({ theme }) => theme.color.black};
        font-weight: ${({ theme }) => theme.font.medium};
        font-size: 40px;
    }
    > p {
        font-size: 14px;
        margin: 8px 0 24px;
        color: ${({ theme }) => theme.color.gray700};
    }
    > img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }
`;

const _ModalContainer = styled.div`
    height: 440px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    overflow: hidden;
    position: relative;
`;

export default LoginModal;
