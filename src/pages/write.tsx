import styled from "@emotion/styled";
import Write from "../components/write";

function WritePost(){
    return (
    <_Wrapper>
        <Write />
    </_Wrapper>
    );
}

const _Wrapper = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:center;
`

export default WritePost;