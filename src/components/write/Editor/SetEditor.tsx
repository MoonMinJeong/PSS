import { useRef, useState } from 'react';
import { EditorType } from '.';
import styled from '@emotion/styled';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import useEditFunction from '../../../hooks/useEditFunction';
import ButtonList from './ButtonList';
import useCreateElement from '../../../hooks/useCreateElement';
import useAddMD from '../../../hooks/useAddMD';

export interface FocusNodeType {
    focusN: Node | null;
    off: number;
}

function MDEditor({ Introduct, setIntroduct }: EditorType) {
    const Ref = useRef<HTMLDivElement | null>(null);
    const [change, setchange] = useState<string>('');

    const { setEdit, setView } = useEditFunction();
    const createElement = useCreateElement();
    const [ClickButtonAdd, ClickButtonSet] = useAddMD();

    const SetViewer = (view: string) => setIntroduct({ ...Introduct, content: view });
    const SetEditor = (edit: string) => {
        setchange(edit);
    };

    const onChangeHTMLValue = (e: ContentEditableEvent) => {
        const { value } = e.target;
        let parent = createElement(value, 'div');
        const ismark = setEdit(parent, Ref.current, SetEditor);
        !ismark && setchange(value);
        setView(parent, SetViewer);
    };

    const ClickInsertMark = (str: string, strLen: number) => {
        ClickButtonAdd(Ref.current, str, SetEditor, SetViewer, strLen);
    };
    const ClickSetMark = (str: string, tag?: string) =>
        ClickButtonSet(Ref.current, SetEditor, SetViewer, str, tag);

    return (
        <div>
            <ButtonList onClickAdding={ClickInsertMark} onClickSetting={ClickSetMark} />
            <_EditableDiv className="HelloEditor">
                <ContentEditable
                    html={change}
                    contentEditable="true"
                    onChange={onChangeHTMLValue}
                    innerRef={Ref}
                    placeholder="내용을 입력해 주세요"
                    className="HelloEditor"
                />
            </_EditableDiv>
        </div>
    );
}

const _EditableDiv = styled.div`
    &.HelloEditor {
        padding: 20px 10px 0 10px;
        font-size: 18px;
        [placeholder]:empty::before {
            content: attr(placeholder);
            color: #555;
        }
    }
`;
export default MDEditor;
