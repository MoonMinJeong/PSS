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
            <div>
                <Image src={backPage} />
                나가기
            </div>
            <_WritePost onClick={SetModal}>작성하기</_WritePost>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const _BackImage = styled(Image)`
    margin-right: 100px;
`;

const _WritePost = styled.button`
    border: none;
    width: 130px;
    height: 40px;
    font-size: 16px;
    border-radius: 14px;
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.main};
`;
export default FootMenu;
