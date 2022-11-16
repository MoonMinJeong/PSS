import styled from '@emotion/styled';
import { PostRequest } from '../../models/notice/request';
import TagInput from './TagInput';
import TitleInput from './TitleInput';

interface PropsType {
    Introduct: PostRequest;
    setIntroduct: (Introduct: PostRequest) => void;
}

function Introduce({ Introduct, setIntroduct }: PropsType) {
    return (
        <>
            <TitleInput
                placeholder="제목을 입력해 주세요."
                Introduct={Introduct}
                setIntroduct={setIntroduct}
            />
            <_TitleLine />
            <TagInput
                name="stacks"
                placeholder="사용한 기술을 입력해 주세요."
                setIntroduct={setIntroduct}
                Introduct={Introduct}
            />
            <_TagLine />
            <TagInput
                name="nicknames"
                placeholder="프로젝트에 참가한 인원을 작성해 주세요."
                setIntroduct={setIntroduct}
                Introduct={Introduct}
            />
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

export default Introduce;
