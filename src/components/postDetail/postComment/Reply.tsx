import styled from '@emotion/styled';
import Profile from '../Profile';

interface Props {
    text: string;
}

const Reply = ({ text }: Props) => {
    return (
        <_ReplyContainer>
            <Profile writerName="김태완" />
            <p>{text}</p>
        </_ReplyContainer>
    );
};

const _ReplyContainer = styled.div`
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 12px;
    width: 780px;
    margin: 12px 0;
    padding: 20px 20px 24px;
    > p {
        font-size: 16px;
        margin-top: 10px;
        color: ${({ theme }) => theme.color.gray900};
    }
`;

export default Reply;
