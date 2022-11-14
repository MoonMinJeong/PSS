import styled from '@emotion/styled';

export interface DropDownItem {
    summary: string;
    onClickFunction: () => void;
    isRed?: boolean;
}

interface Props {
    top?: number;
    right?: number;
    items: DropDownItem[];
}

const DropdownItem = (props: Props) => {
    const { items } = props;
    return (
        <_Wrapper {...props}>
            {items.map((i) => (
                <_List onClick={i.onClickFunction} isRed={i.isRed}>
                    {i.summary}
                </_List>
            ))}
        </_Wrapper>
    );
};

export default DropdownItem;

const _Wrapper = styled.ul<Props>`
    position: absolute;
    top: 56px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.white};
    z-index: 9999;
    right: 0;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.4));
`;
const _List = styled.li<{
    isRed?: boolean;
}>`
    width: 122px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ isRed, theme }) => (isRed ? theme.color.systemRed : theme.color.black)};
`;
