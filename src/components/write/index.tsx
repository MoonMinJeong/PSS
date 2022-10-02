import styled from '@emotion/styled';
import { useState } from 'react';
import FootMenu from './footMenu';
import InputSession from './InputSession';
import PreView from './Preview';

function Write() {
    const [modal, setModal] = useState(false);
    return (
        <>
            <_Wrapper>
                <InputSession />
                <FootMenu setModal={setModal} />
            </_Wrapper>
            <PreView />
            {modal && <div>asdasdasf</div>}
        </>
    );
}

const _Wrapper = styled.div`
    width: 50%;
    padding: 20px 40px;
`;

export default Write;
