import styled from '@emotion/styled';

interface Props {
    text: string;
    img: string;
    color: string;
    backgroundColor: string;
    onClick: () => void;
}

const Button = ({ text, img, color, backgroundColor, onClick }: Props) => {
    return (
        <ButtonWrapper backgroundColor={backgroundColor} onClick={onClick}>
            <img src={img} alt="로그인배경" />
            <Text color={color}>{text}</Text>
        </ButtonWrapper>
    );
};

const ButtonWrapper = styled.div<{ backgroundColor: string }>`
    width: 280px;
    height: 48px;
    border-radius: 8px;
    background-color: ${({ backgroundColor }) => backgroundColor};
    border: ${({ backgroundColor }) => backgroundColor === '#FFFFFF' && '1px solid #8D8D8D'};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    cursor: pointer;
    > img {
        width: 24px;
        height: 24px;
        margin-right: 20px;
    }
`;

const Text = styled.p`
    font-weight: 500;
    font-size: 18px;
    margin-top: 2px;
    color: ${({ color }) => color};
`;

export default Button;
