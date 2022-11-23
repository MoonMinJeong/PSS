import styled from '@emotion/styled';
import SavePost from '../components/save/SavePost';
import Title from '../components/save/Title';
import { useSaveList } from '../hooks/useSaveList';

function saveProfile() {
    const { saveNotice, clientRemove } = useSaveList();

    return (
        <_Wrapper>
            <_Center>
                <Title user_Name={saveNotice.nickname} post_Count={saveNotice.notice_list.length} />
                <_SaveBox>
                    {saveNotice.notice_list.map((e, i) => (
                        <SavePost key={i} saveNotice={e} onClickForRemove={clientRemove} />
                    ))}
                </_SaveBox>
            </_Center>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const _Center = styled.div`
    width: 1200px;
`;

const _SaveBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
`;

export default saveProfile;
