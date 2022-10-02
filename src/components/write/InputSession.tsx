import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';
import FootMenu from './footMenu';
import TagInput from './TagInput';

export interface InputState {
    title: '';
    skill: [];
    attend: [];
    contend: string;
}

function InputSession() {
    const [inputs, setinputs] = useState<InputState>({
        title: '',
        skill: [],
        attend: [],
        contend: '',
    });

    const setValue = (e: ChangeEvent<HTMLInputElement>, name: string) =>
        setinputs({ ...inputs, [name]: e.target.value });

    return (
        <>
            <TagInput
                name="title"
                placeholder="제목을 입력해 주세요."
                value={inputs.title}
                setValue={setValue}
            />
            <_TitleLine />
            <TagInput name="skill" placeholder="사용한 기술을 입력해 주세요." />
            <_TagLine />
            <TagInput name="attend" placeholder="프로젝트에 참가한 인원을 작성해 주세요." />
        </>
    );
}

const _TitleLine = styled.div`
    width: 150px;
    height: 3px;
    background-color: ${({ theme }) => theme.color.main};
`;

const _TagLine = styled.div`
    width: 50%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.gray500};
`;

export default InputSession;
