import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { InputState } from './InputSession';

interface PropsType {
    name: string;
    placeholder: string;
    value?: string;
    tag?: [];
    setValue?: (e: ChangeEvent<HTMLInputElement>, name: string) => void;
}

function TagInput({ name, placeholder, value, tag = [], setValue }: PropsType) {
    const InputChange = setValue
        ? (e: ChangeEvent<HTMLInputElement>) => {
              setValue(e, name);
              console.log(value);
          }
        : undefined;
    return (
        <_Wrapper>
            {tag.length !== 0 && tag.map((el, idx) => <_InputTag key={idx}>{el}</_InputTag>)}
            <_NameInput
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={InputChange}
            />
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
`;

const _NameInput = styled.input<PropsType>`
    width: 500px;
    margin: 20px 0;
    font-size: ${({ name }) => (name === 'title' ? '36px' : '20px')};
    font-weight: ${({ name }) => (name === 'title' ? 'bold' : 'normal')};
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;

const _InputTag = styled.div``;

export default TagInput;
