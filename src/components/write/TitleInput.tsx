import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import { IntroductType } from '../../pages/write';

interface PropsType {
    placeholder: string;
    Introduct: IntroductType;
    setIntroduct: (Introduct: IntroductType) => void;
}

function TitleInput({ placeholder, setIntroduct, Introduct }: PropsType) {
    const TitleChange = (e: ChangeEvent<HTMLInputElement>) =>
        setIntroduct({ ...Introduct, title: e.target.value });

    return <_NameInput value={Introduct.title} placeholder={placeholder} onChange={TitleChange} />;
}

const _NameInput = styled.input`
    width: 500px;
    margin: 20px 0;
    font-size: 36px;
    font-weight: ${({ theme }) => theme.font.bold};
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;

export default TitleInput;
