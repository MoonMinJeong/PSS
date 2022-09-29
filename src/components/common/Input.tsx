import styled from "@emotion/styled"

interface PropsType{
    inputFontSize: string,
    width: string,
    height: string,
    inputFontWeight: string,
    
}

function Input(props: PropsType){
    return <_inputElement 
            inputFontWeight={props.inputFontWeight}
            inputFontSize={props.inputFontSize}
            width={props.width}
            height={props.height}
            />
}

const _inputElement = styled.button<PropsType>`
    font-size: ${props => props.inputFontSize};
    color: ${props => props.inputFontWeight};
    width: ${props => props.width};
    height: ${props => props.height};
`

export default Input