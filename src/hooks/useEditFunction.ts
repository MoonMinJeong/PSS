import { marked } from 'marked';
import useCreateElement from './useCreateElement';
import useCursorGetSet from './useCursorGetSet';
import useDisableMark from './useDisableMark';

const useEditFunction = () => {
    const createElement = useCreateElement();
    const [Mark, DisableMark] = useDisableMark();
    const [getCursorPosition, setCursorPosition] = useCursorGetSet();

    const MarkedCompare = (first: NodeListOf<ChildNode>, second: NodeListOf<ChildNode>) => {
        const firstTag = [];
        const secondTag = [];

        for (let i = 0; i < first.length; i++) {
            const firstName = first[i].nodeName;
            const secondName = second[i] ? second[i].nodeName : '#text';
            if (firstName !== '#text') firstTag.push(firstName);
            if (secondName !== '#text') secondTag.push(secondName);
        }
        if (firstTag.length !== secondTag.length) return true;
        for (let i = 0; i < first.length; i++) {
            if (firstTag[i] !== secondTag[i]) return true;
        }
        return false;
    };

    const setBrMarked = (parent: HTMLElement, Marked: (str: string) => string) => {
        let str = '';
        let currentStr = '';
        let currentNode = null;
        let markBoolean = true;
        if (parent.childNodes.length !== 0) {
            {
                for (var i = 0; i < parent.childNodes.length; i++) {
                    currentNode = parent.childNodes[i] as HTMLElement;
                    if (currentNode.innerHTML === '<br>') str += '<div><br></div>';
                    else if (currentNode.textContent) {
                        currentStr = Marked(currentNode.textContent);
                        const compare = createElement(currentStr, 'p').firstChild;
                        if (
                            // 태그가 다를 경우 , 자식이 다를 경우 마크다운 변경
                            (compare?.childNodes &&
                                currentNode &&
                                MarkedCompare(compare?.childNodes, currentNode.childNodes)) ||
                            (compare?.nodeName !== currentNode.nodeName && compare?.nodeName)
                        ) {
                            markBoolean = false;
                        }
                        str += currentStr;
                    }
                }
            }
        }
        return [str, markBoolean] as const;
    };

    const setEdit = (
        parent: HTMLElement | null,
        editNode: HTMLElement | null,
        HtmlChange: (edit: string) => void,
    ) => {
        if (!parent || !editNode) return null;

        let sel = window.getSelection();
        if (!sel) return null;

        let pos = { pos: 0, done: false };
        let node = sel.focusNode;
        let off = sel.focusOffset;

        if (!node) return null;

        pos = getCursorPosition(editNode, node, off, pos);

        const [edit, markedBoolean] = setBrMarked(parent, DisableMark);
        if (markedBoolean) return null;

        HtmlChange(edit);

        setTimeout(() => {
            sel?.removeAllRanges();
            let range = setCursorPosition(editNode, document.createRange(), {
                pos: pos.pos,
                done: false,
            });
            if (!range) return null;
            range.collapse(true);
            sel?.addRange(range);
        }, 1);

        return true;
    };

    const setView = (parent: HTMLElement, HtmlChange: (view: string) => void): void => {
        if (!parent) return;

        const [view] = setBrMarked(parent, Mark);
        HtmlChange(view);
    };

    return {
        setEdit,
        setView,
    };
};

export default useEditFunction;
