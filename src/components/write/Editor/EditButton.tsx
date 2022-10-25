import styled from '@emotion/styled';
import Image, { StaticImageData } from 'next/image';

interface OptionType {
    src: StaticImageData;
    width?: number;
    height?: number;
    text?: string;
}

function EditButton({ src, width, height, text }: OptionType) {
    return (
        <_EditButton>
            <Image src={src} width={width} height={height} />
            {text}
        </_EditButton>
    );
}

const _EditButton = styled.button`
    border: 0;
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    margin: 0 5px;
    height: 40px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.main};
    border-radius: 2px;
    :hover {
        background-color: ${({ theme }) => theme.color.gray500};
    }
`;

export default EditButton;
