import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { EditorType } from '.';
import styled from '@emotion/styled';
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable';
import useEditFunction from '../../../hooks/useEditFunction';
import ButtonList from './ButtonList';
import useCreateElement from '../../../hooks/useCreateElement';
import useAddMD from '../../../hooks/useAddMD';
import useCursorGetSet from '../../../hooks/useCursorGetSet';

export interface FocusNodeType {
    focusN: Node | null;
    off: number;
}

function MDEditor({ Introduct, setIntroduct }: EditorType) {
    const Ref = useRef<HTMLDivElement | null>(null);
    const [change, setchange] = useState<string>('');

    useEffect(() => {
        setTimeout(() => setchange(Introduct.content), 500);
    }, []);
    // hook
    const { setEdit, setView } = useEditFunction();
    const createElement = useCreateElement();
    const [ClickButtonAdd, ClickButtonSet, ClickImgAdd] = useAddMD();

    // state hook
    const SetViewer = (view: string) => setIntroduct({ ...Introduct, content: view });
    const SetEditor = (edit: string) => setchange(edit);

    const F_SetViewer = (view: string) =>
        setIntroduct((prev) => ({
            ...prev,
            content: view,
        }));
    const F_SetEditor = (edit: string) => setchange(() => edit);

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
    const ClickSetMark = (str: string) => ClickButtonSet(Ref.current, SetEditor, SetViewer, str);

    const ClickImgMark = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) return;

        let filer = new FileReader();
        const IMG = e.target.files[0];

        filer.readAsDataURL(IMG);
        filer.onloadend = () => {
            const url = URL.createObjectURL(IMG);
            const ImageForm = new FormData();
            ImageForm.set('files', IMG);
            ClickImgAdd(Ref.current, F_SetEditor, F_SetViewer, url, ImageForm);
        };
    };

    return (
        <div>
            <ButtonList
                onClickAdding={ClickInsertMark}
                onClickSetting={ClickSetMark}
                onClickImg={ClickImgMark}
            />
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
    height: 432px;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 5px;
    }
    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.color.gray500};
        border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.color.main};
        border-radius: 5px;
    }
    &.HelloEditor {
        padding: 20px 10px 0 10px;
        font-size: 18px;
        em {
            font-style: italic;
        }
        [placeholder]:empty::before {
            content: attr(placeholder);
            color: #555;
        }
    }
`;
export default MDEditor;
