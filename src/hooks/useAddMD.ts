import { uploadImage } from '../apis/image';
import useCreateElement from './useCreateElement';
import useCursorGetSet from './useCursorGetSet';
import useDisableMark from './useDisableMark';

const useAddMD = () => {
    const [Mark, DisableMark] = useDisableMark();
    const createElement = useCreateElement();
    const [getCursorPosition, setCursorPosition] = useCursorGetSet();

    const addMarkDown = (
        parent: Node,
        pos: { pos: number; done: boolean },
        str: string,
        Add: boolean,
    ) => {
        let MarkStr = '';
        let ViewStr = '';
        let currentNode = null;
        let curLen = pos.pos;

        if (parent.textContent) {
            for (let i = 0; i < parent.childNodes.length; i++) {
                currentNode = parent.childNodes[i] as HTMLElement;
                if (currentNode.innerHTML === '<br>') {
                    MarkStr += '<div><br></div>';
                    ViewStr += '<div><br></div>';
                }
                if (!currentNode.innerHTML && currentNode.textContent) {
                    currentNode = createElement(currentNode.textContent, 'p');
                }
                const TextStr = currentNode ? currentNode.innerText : '';
                const TextLen = TextStr ? TextStr.length : 0;
                const Offset = curLen - TextLen;

                const Adding = TextLen
                    ? [TextStr.substring(0, pos.pos), str, TextStr.substring(pos.pos)].join('')
                    : str;

                const Setting = `${str} ${TextStr}`;

                const NodeText = Add ? Adding : Setting;
                if (Offset <= 0 && !pos.done) {
                    MarkStr += DisableMark(NodeText);
                    ViewStr += Mark(NodeText);
                    pos.done = true;
                } else {
                    MarkStr += DisableMark(TextStr ? TextStr : '');
                    ViewStr += Mark(TextStr ? TextStr : '');
                }
                curLen -= TextLen;
            }
        } else {
            const NodeText = Add ? str : `${str} f`;
            MarkStr += DisableMark(NodeText);
            ViewStr += Mark(NodeText);
        }
        return [MarkStr, ViewStr] as const;
    };

    const ClickButtonAdd = (
        parent: HTMLElement | null,
        str: string,
        HtmlChange: (edit: string) => void,
        ViewChange: (view: string) => void,
        strLen: number,
    ) => {
        const sel = window.getSelection();
        const node = sel?.focusNode;
        const off = sel?.focusOffset;
        let pos = { pos: 0, done: false };
        if (!parent || !node || typeof off !== 'number') return '';
        pos = getCursorPosition(parent, node, off, pos);

        pos = { pos: pos.pos, done: false };
        const [MarkStr, ViewStr] = addMarkDown(parent, pos, str, true);
        pos = { pos: pos.pos + strLen, done: false };
        HtmlChange(MarkStr);
        ViewChange(ViewStr);
        parent.focus();

        setTimeout(() => {
            sel?.removeAllRanges();
            let range = setCursorPosition(parent, document.createRange(), {
                pos: pos.pos,
                done: false,
            });
            if (!range) return null;
            range.collapse(true);
            sel?.addRange(range);
        }, 1);

        return MarkStr;
    };

    const ClickButtonSet = (
        parent: HTMLElement | null,
        HtmlChange: (edit: string) => void,
        ViewChange: (view: string) => void,
        str: string,
    ) => {
        const sel = window.getSelection();
        const node = sel?.focusNode;
        const off = sel?.focusOffset;
        let pos = { pos: 0, done: false };
        if (!parent || !node || typeof off !== 'number') return '';
        pos = getCursorPosition(parent, node, off, pos);

        pos = { pos: pos.pos, done: false };

        const [MarkStr, ViewStr] = addMarkDown(parent, pos, str, false);
        pos = { pos: pos.pos + str.length, done: false };
        HtmlChange(MarkStr);
        ViewChange(ViewStr);
        parent.focus();
    };

    const ClickImgAdd = (
        parent: HTMLElement | null,
        HtmlChange: (edit: string) => void,
        ViewChange: (view: string) => void,
        url: string,
        ImageForm: FormData,
    ) => {
        
        url = `![업로드중!!](${url})`;
        const REX = new RegExp(/\!\[(업로드중!!)\]\(([^\)]+)\)/i);
        const Len = url.length;
        const MarkStr = ClickButtonAdd(parent, url, HtmlChange, ViewChange, Len);

        uploadImage(ImageForm).then((data) => {
            const img = data.data.images[0];
            const ImageHTML = MarkStr.replace(REX, `![](${img})`);

            HtmlChange(ImageHTML);
        });
    };

    return [ClickButtonAdd, ClickButtonSet, ClickImgAdd] as const;
};

export default useAddMD;
