import styled from '@emotion/styled';
import { PostRequest } from '../../models/createPost/request';
import MDViewer from './Editor/SetViewer';

interface PropsType {
    modal: boolean;
    setModal: (modal: boolean) => void;
    Introduct: PostRequest;
}

function PreView({ modal, setModal, Introduct }: PropsType) {
    const TurnOff = () => setModal(false);

    return (
        <_Wrapper>
            <_ContentWrapper>
                <h1>{Introduct.title}</h1>
                <MDViewer content={Introduct.content} />
            </_ContentWrapper>
            <_TapBackground onClick={TurnOff} modal={modal} />
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    width: 50%;
    color: ${({ theme }) => theme.color.black};
`;

const _ContentWrapper = styled.div`
    padding: 50px 50px;
`;

const _TapBackground = styled.div<{ modal: boolean }>`
    position: absolute;
    z-index: ${({ modal }) => (modal ? 9999 : -1)};
    top: 0;
    width: 50%;
    height: 100%;
    opacity: 10%;
    background-color: ${({ theme }) => theme.color.main};
`;

export default PreView;
