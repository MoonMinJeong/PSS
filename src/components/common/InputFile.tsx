import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

interface PropsType {
    id: string;
    accept: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function InputForImage({ id, accept, onChange }: PropsType) {
    return <_InputForImage id={id} accept={accept} onChange={onChange} type="file" />;
}

const _InputForImage = styled.input`
    display: none;
`;

export default InputForImage;
