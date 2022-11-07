import styled from '@emotion/styled';
import CloseIcon from '../../assets/common/close.png';

const MemoirModal = () => {
    return (
        <_ModalBackground>
            <_ModalContainer>
                <h1>회고를 작성하시겠습니까?</h1>
                <p>프소서는 회고록 기능을 제공하고 있습니다.</p>
                <p> 회고를 통해 프로젝트를 되돌아보는 시간을 가져보세요.</p>
                <img src={CloseIcon.src} />
                <_MoveToMemoirButton>회고록 작성하러가기</_MoveToMemoirButton>
                <_CloseButton>다음에 할게요</_CloseButton>
            </_ModalContainer>
        </_ModalBackground>
    );
};

const _ModalBackground = styled.div`
    z-index: 100;
    top: 0;
    background-color: rgba(0, 0, 0, 0.3);
    position: fixed;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const _ModalContainer = styled.div`
    height: 380px;
    width: 500px;
    border-radius: 16px;
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    > h1 {
        font-weight: ${({ theme }) => theme.font.medium};
        color: ${({ theme }) => theme.color.black};
        font-size: 28px;
        margin: 90px 0 8px;
    }
    > p {
        color: ${({ theme }) => theme.color.gray700};
        font-size: 16px;
        line-height: 20px;
    }
    > img {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 10px;
        right: 10px;
        user-select: none;
        cursor: pointer;
    }
`;

const _MoveToMemoirButton = styled.button`
    background-color: ${({ theme }) => theme.color.main};
    font-weight: ${({ theme }) => theme.font.medium};
    border-radius: 12px;
    font-size: 18px;
    user-select: none;
    padding: 16px 32px;
    margin: 32px 0 16px;
    color: ${({ theme }) => theme.color.white};
`;

const _CloseButton = styled.p`
    cursor: pointer;
    user-select: none;
    font-weight: ${({ theme }) => theme.font.regular};
    font-size: 18px;
    color: ${({ theme }) => theme.color.gray700};
`;

export default MemoirModal;
