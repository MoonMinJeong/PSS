import styled from '@emotion/styled';

interface PropsType {
    setModal: (modal: boolean) => void;
}

function PreView({ setModal }: PropsType) {
    const TurnOff = () => setModal(false);

    return (
        <_Wrapper>
            안녕하세요 반가워요
            <_Background onClick={TurnOff} />
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    width: 50%;
    color: ${({ theme }) => theme.color.black};
`;

const _Background = styled.div`
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    opacity: 10%;
    background-color: ${({ theme }) => theme.color.main};
`;

export default PreView;
