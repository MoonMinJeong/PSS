import styled from '@emotion/styled';
import SavePost from '../components/save/SavePost';
import Title from '../components/save/Title';

function saveProfile() {
    return (
        <_Wrapper>
            <_Center>
                <Title user_Name="김태완" post_Count={5} />
                <_SaveBox>
                    <SavePost onClickForRemove={() => {}} />
                    <SavePost onClickForRemove={() => {}} />
                    <SavePost onClickForRemove={() => {}} />
                    <SavePost onClickForRemove={() => {}} />
                    <SavePost onClickForRemove={() => {}} />
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
    justify-content:space-between;
    margin-top:50px;
`;

export default saveProfile;
