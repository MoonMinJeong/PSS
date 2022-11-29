import styled from '@emotion/styled';

interface Props {
    text: string;
}

const Tag = ({ text }: Props) => {
    return <_Wrapper>{text}</_Wrapper>;
};

const _Wrapper = styled.p`
    background-color: ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.white};
    font-size: 12px;
    font-weight: ${({ theme }) => theme.font.medium};
    padding: 4px 12px 3px;
    white-space: nowrap;
    border-radius: 50px;
`;

export default Tag;
