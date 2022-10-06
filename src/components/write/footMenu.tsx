import styled from '@emotion/styled';
import Image from 'next/image';
import { backPage } from '../../assets';

interface PropsType {
    setModal: (modal: boolean) => void;
}

function FootMenu({ setModal }: PropsType) {
    const SetModal = () => setModal(true);

    return (
        <_Wrapper>
            <_BackPageButton>
                <Image src={backPage} />
                나가기
            </_BackPageButton>
            <_WritePost onClick={SetModal}>작성하기</_WritePost>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const _WritePost = styled.button`
    border: none;
    width: 130px;
    height: 40px;
    font-size: 16px;
    border-radius: 14px;
    font-weight: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.main};
`;

const _BackPageButton = styled.button`
    font-size: 16px;
`;
export default FootMenu;
