import { uploadImage } from '../apis/image';
import useCreateElement from './useCreateElement';
import useCursorGetSet, { CursorType } from './useCursorGetSet';
import useDisableMark from './useDisableMark';

const Adding = (str: string, word: string, off: number) =>
    [str.substring(0, off), word, str.substring(off)].join('');

const Setting = (str: string, word: string) => `${word} ${str}`;

const TextNullstr = (str: string | null) => (str ? str : '');

const IsBr = (node: HTMLElement) => (node.innerHTML === '<br>' ? true : false);

const useAddMD = () => {
    const [Mark, DisableMark] = useDisableMark();
    const createElement = useCreateElement();
    const [getCursorPosition, setCursorPosition] = useCursorGetSet();

    const addMarkDown = (parent: Node, pos: CursorType, str: string, Add: boolean) => {
        let MarkStr = '';
        let ViewStr = '';
        let currentNode = null;
        let curLen = pos.off;
        let { line, off } = pos;

        const StringChange = (str: string) => {
            MarkStr += DisableMark(str);
            ViewStr += Mark(str);
        };

        if (parent.hasChildNodes()) {
            parent.childNodes.forEach((element, i) => {
                if (line === i) {
                    if (IsBr(element as HTMLElement)) {
                        StringChange(`<div>${str}</div>`);
                    } else {
                        const addText = TextNullstr(element.textContent);
                        const curText = Add ? Adding(addText, str, off) : Setting(addText, str);
                        StringChange(curText);
                    }
                } else StringChange(TextNullstr(element.textContent));
            });
            /*for (let i = 0; i < parent.childNodes.length; i++) {
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
            }*/
        } else {
            const NodeText = Add ? str : `${str} 텍스트`;
            StringChange(NodeText);
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

        if (!parent || !node || typeof off !== 'number') return '';

        const pos = getCursorPosition(parent, node, off);
        const [MarkStr, ViewStr] = addMarkDown(parent, pos, str, true);

        HtmlChange(MarkStr);
        ViewChange(ViewStr);
        parent.focus();

        setTimeout(() => {
            sel?.removeAllRanges();
            let range = setCursorPosition(parent, pos);
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

        if (!parent || !node || typeof off !== 'number') return '';

        const pos = getCursorPosition(parent, node, off);
        const [MarkStr, ViewStr] = addMarkDown(parent, pos, str, false);
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
