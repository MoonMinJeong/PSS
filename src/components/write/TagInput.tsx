import styled from '@emotion/styled';
import { ChangeEvent, useState, FormEvent, KeyboardEvent, useMemo, useEffect } from 'react';
import { PostRequest } from '../../models/notice/request';
import { Mention, MentionItem, MentionsInput, SuggestionDataItem } from 'react-mentions';
import { useQuery } from 'react-query';
import { getUserSearch } from '../../apis/user';
import { GetUserResponse } from '../../models/user/response';

interface PropsType {
    name: 'stacks' | 'nicknames';
    placeholder: string;
    Introduct: PostRequest;
    setIntroduct: (Introduct: PostRequest) => void;
}

function TagInput({ name, placeholder, setIntroduct, Introduct }: PropsType) {
    const [tagWord, setWord] = useState<string>('');
    const [keyword, setKeyword] = useState('');
    const tag = Introduct[name];

    const TagChange = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value);

    const addTag = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (tag.includes(tagWord) || tagWord === '') return;
        setWord('');
        if (name === 'stacks')
            setIntroduct({ ...Introduct, stacks: Introduct.stacks.concat(tagWord) });
        else setIntroduct({ ...Introduct, nicknames: Introduct.nicknames.concat(keyword) });
    };
    const removeTagBack = (e: KeyboardEvent<HTMLInputElement>) =>
        e.keyCode === 8 &&
        tagWord === '' &&
        setIntroduct({ ...Introduct, [name]: tag.filter((_, i) => tag.length !== i + 1) });

    const removeTag = (idx: number) =>
        setIntroduct({ ...Introduct, [name]: tag.filter((_, i) => idx !== i) });
    const onChange = (
        event: { target: { value: string } },
        newValue: string,
        newPlainTextValue: string,
        mentions: MentionItem[],
    ) => {
        setWord(event.target.value);
        setKeyword(event.target.value);
    };
    const { data } = useQuery(['searchUser', name, keyword], () =>
        name === 'nicknames' && tagWord[0] === '@'
            ? getUserSearch(
                  keyword
                      .split('')
                      .filter((_, index) => index !== 0)
                      .join(''),
              )
            : {
                  list: [],
              },
    );
    const suggestionUsers: SuggestionDataItem[] = useMemo(() => {
        if (data)
            return data.list.map((item) => {
                return {
                    id: item.id,
                    display: item.nickname,
                };
            });
        else return [];
    }, [data]);
    const onAdd = (id: string | number, display: string) => {
        setKeyword('');
        setIntroduct({
            ...Introduct,
            nicknames: Introduct.nicknames.concat(display),
        });
    };
    return (
        <_Wrapper>
            {tag.length !== 0 &&
                tag.map((el, idx) =>
                    name === 'stacks' ? (
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
                {name === 'stacks' ? (
                    <_NameInput
                        name={name}
                        value={tagWord}
                        placeholder={placeholder}
                        onChange={TagChange}
                        onKeyDown={removeTagBack}
                    />
                ) : (
                    <MentionsInput
                        value={keyword}
                        onChange={onChange}
                        allowSuggestionsAboveCursor={true}
                        className={name}
                        name={name}
                        placeholder={
                            tag.length === 0
                                ? '프로젝트에 참가한 인원을 작성해 주세요. ex)@pss'
                                : ''
                        }>
                        <Mention trigger={'@'} onAdd={onAdd} data={suggestionUsers} />
                    </MentionsInput>
                )}
            </form>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    padding: 10px 0;
    > form {
        > .nicknames {
            width: 400px;
            margin: 15px 0;
            font-size: 18px;
            font-weight: ${({ theme }) => theme.font.bold};
            ::placeholder {
                color: ${({ theme }) => theme.color.gray700};
            }
        }
    }
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
