import styled from '@emotion/styled';
import { ChangeEvent, useState, FormEvent, KeyboardEvent } from 'react';
import { IntroductType } from '../../pages/write';

interface PropsType {
    name: 'skill' | 'attend';
    placeholder: string;
    Introduct: IntroductType;
    setIntroduct: (Introduct: IntroductType) => void;
}

function TagInput({ name, placeholder, setIntroduct, Introduct }: PropsType) {
    const [tagWord, setWord] = useState<string>('');
    const tag = Introduct[name];

    const TagChange = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value);

    const addTag = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (tag.includes(tagWord) || tagWord === '') return;
        setIntroduct({ ...Introduct, [name]: Introduct[name].concat(tagWord) });
        setWord('');
    };

    const removeTagBack = (e: KeyboardEvent<HTMLInputElement>) =>
        e.keyCode === 8 &&
        tagWord === '' &&
        setIntroduct({ ...Introduct, [name]: tag.filter((_, i) => tag.length !== i + 1) });

    const removeTag = (idx: number) =>
        setIntroduct({ ...Introduct, [name]: tag.filter((_, i) => idx !== i) });

    return (
        <_Wrapper>
            {tag.length !== 0 &&
                tag.map((el, idx) =>
                    name === 'skill' ? (
                        <_SkillTag key={idx} onClick={() => removeTag(idx)}>
                            {el}
                        </_SkillTag>
                    ) : (
                        <_AttendTag key={idx} onClick={() => removeTag(idx)}>
                            {el}
                        </_AttendTag>
                    ),
                )}
            <form onSubmit={addTag}>
                <_NameInput
                    name={name}
                    value={tagWord}
                    placeholder={placeholder}
                    onChange={TagChange}
                    onKeyDown={removeTagBack}
                />
            </form>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 0;
`;

const _NameInput = styled.input`
    width: 400px;
    margin: 15px 0;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.font.bold};
    ::placeholder {
        color: ${({ theme }) => theme.color.gray700};
    }
`;

const _SkillTag = styled.div`
    padding: 5px 30px;
    margin: 5px 5px;
    border-radius: 50px;
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.white};
    font-weight: ${({ theme }) => theme.font.bold};
    :hover {
        background-color: ${({ theme }) => theme.color.systemRed};
    }
`;

const _AttendTag = styled.div`
    padding: 5px 10px;
    margin: 5px 5px;
    border-radius: 50px;
    color: ${({ theme }) => theme.color.main};
    font-weight: ${({ theme }) => theme.font.bold};
    :hover {
        color: ${({ theme }) => theme.color.systemRed};
    }
`;

export default TagInput;
