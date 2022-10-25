import { KeyboardEvent, useRef } from 'react';
import { EditorType } from '.';
import styled from '@emotion/styled';
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
import EditButton from './EditButton';

function MDEditor({ Introduct, setIntroduct }: EditorType) {
    const Ref = useRef<HTMLDivElement | null>(null);

    const Change = (e: KeyboardEvent<HTMLDivElement> | undefined) => {
        setTimeout(
            () => Ref.current && setIntroduct({ ...Introduct, content: Ref.current.innerText }),
            0,
        );
    };

    return (
        <div>
            <_EditToolBar>
                <EditButton src={H_Button} width={14} text="1" />
                <EditButton src={H_Button} width={14} text="2" />
                <EditButton src={H_Button} width={14} text="3" />
                <EditButton src={H_Button} width={14} text="4" />
                <_EditButtonLine />
                <EditButton src={Bold_Button} width={14} />
                <EditButton src={Tip_Button} width={16} />
                <EditButton src={UnderScore_Button} width={16} height={22} />
                <_EditButtonLine />
                <EditButton src={Code_Button} width={24} />
                <EditButton src={Quote_Button} width={24} />
                <_EditButtonLine />
                <EditButton src={Image_Button} width={22} />
                <EditButton src={Link_Button} width={24} />
            </_EditToolBar>
            <_EditableDiv
                contentEditable="true"
                onKeyDown={Change}
                ref={Ref}
                placeholder="내용을 입력해 주세요"></_EditableDiv>
        </div>
    );
}

const _EditableDiv = styled.div`
    width: 400px;
    height: 100px;
    padding-top: 20px;
    font-size: 18px;
    :empty:before {
        content: attr(placeholder);
        color: ${({ theme }) => theme.color.gray700};
    }
`;

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

export default MDEditor;
