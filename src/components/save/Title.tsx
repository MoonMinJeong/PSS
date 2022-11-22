import styled from '@emotion/styled';

interface PropsType {
    user_Name: string;
    post_Count: number;
}

function Title({ user_Name, post_Count }: PropsType) {
    return (
        <_Title>
            {user_Name}님의 임시 글 총 <_PostCount>{post_Count}</_PostCount>개
        </_Title>
    );
}

const _Title = styled.div`
    font-weight: bold;
    font-size: 28px;
`;

const _PostCount = styled.span`
    color: ${({ theme }) => theme.color.main};
`;

export default Title;
