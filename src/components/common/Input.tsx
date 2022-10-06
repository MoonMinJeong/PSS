import styled from '@emotion/styled';

interface PropsType {
    inputFontSize: string;
    width: string;
    height: string;
    inputFontWeight: string;
    placeholder: string;
}

function Input(props: PropsType) {
    return <_inputElement {...props} />;
}

const _inputElement = styled.button<PropsType>`
    font-size: ${({ inputFontSize }) => inputFontSize};
    font-weight: ${({ inputFontWeight }) => inputFontWeight};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
`;

export default Input;
