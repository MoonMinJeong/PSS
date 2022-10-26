import styled from '@emotion/styled';

interface Props {
    direction?: 'top' | 'bottom';
    color?: string;
}

const Arrow = ({ direction = 'bottom', color = '#000000' }: Props) => {
    return (
        <_Wrapper
            direction={direction}
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9.56L6.413 9H17.607L18 9.54L12.373 15H11.546L6 9.56Z" fill={color} />
        </_Wrapper>
    );
};
export default Arrow;

const _Wrapper = styled.svg<{
    direction: 'top' | 'bottom';
}>`
    transform: rotate(
        ${({ direction }) => {
            switch (direction) {
                case 'bottom':
                    return '0';
                case 'top':
                    return '0.5';
            }
        }}turn
    );
`;
