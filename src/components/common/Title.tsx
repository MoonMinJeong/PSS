import styled from '@emotion/styled';

interface Props {
    type: 'history' | 'like';
    name: string;
    count: number;
}

const Title = ({ type, name, count }: Props) => {
    return (
        <_Wrapper>
            {name}님{type === 'history' ? '의 기록' : '이 관심을 가진 글'}&nbsp;총&nbsp;
            <p>{count}</p>개
        </_Wrapper>
    );
};

export default Title;

const _Wrapper = styled.h1`
    font-size: 32px;
    font-weight: 500;
    display: flex;
    color: ${({ theme }) => theme.color.black};

    > p {
        color: ${({ theme }) => theme.color.main};
        font-weight: 700;
    }
`;
