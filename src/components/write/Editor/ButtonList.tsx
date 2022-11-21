import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import {
    Bold_Button,
    Code_Button,
    H_Button,
    Image_Button,
    Link_Button,
    Quote_Button,
    Tip_Button,
    UnderScore_Button,
} from '../../../assets';
import EditButton from '../../common/EditButton';
import InputForImage from '../../common/InputFile';
import ImgEditButton from '../../common/ImgEditButton';

interface PropsType {
    onClickAdding: (str: string, strLen: number) => void;
    onClickSetting: (str: string, tag?: string) => void;
    onClickImg: (e: ChangeEvent<HTMLInputElement>) => void;
}

function ButtonList({ onClickAdding, onClickSetting, onClickImg }: PropsType) {
    return (
        <_EditToolBar>
            <InputForImage id="imgButton" accept=".png, .svg, .gif" onChange={onClickImg} />
            <EditButton
                src={H_Button}
                width={14}
                text="1"
                onClick={() => onClickSetting('#', 'h1')}
            />
            <EditButton
                src={H_Button}
                width={14}
                text="2"
                onClick={() => onClickSetting('##', 'h2')}
            />
            <EditButton
                src={H_Button}
                width={14}
                text="3"
                onClick={() => onClickSetting('###', 'h3')}
            />
            <EditButton
                src={H_Button}
                width={14}
                text="4"
                onClick={() => onClickSetting('####', 'h4')}
            />
            <_EditButtonLine />
            <EditButton
                src={Bold_Button}
                width={14}
                onClick={() => onClickAdding('**<strong>텍스트</strong>**', 7)}
            />
            <EditButton
                src={Tip_Button}
                width={16}
                onClick={() => onClickAdding('*<em>텍스트</em>*', 5)}
            />
            <EditButton
                src={UnderScore_Button}
                width={16}
                height={22}
                onClick={() => onClickAdding('~~텍스트~~', 5)}
            />
            <EditButton
                src={Code_Button}
                width={24}
                onClick={() => onClickAdding('```텍스트```', 9)}
            />
            <_EditButtonLine />
            <EditButton
                src={Quote_Button}
                width={24}
                onClick={() => onClickSetting('> ', 'blockquote')}
            />
            <ImgEditButton
                src={Image_Button}
                width={22}
                htmlFor="imgButton"
            />
            <EditButton
                src={Link_Button}
                width={24}
                onClick={() => onClickAdding('[Link](링크)', 10)}
            />
        </_EditToolBar>
    );
}

const _EditToolBar = styled.div`
    display: flex;
    align-items: center;
    background-color: ${({ theme }) => theme.color.gray300};
    border-radius: 5px;
`;

const _EditButtonLine = styled.span`
    background-color: ${({ theme }) => theme.color.gray500};
    border-radius: 50px;
    width: 0.75px;
    height: 25px;
    margin: 0 10px;
`;

export default ButtonList;
