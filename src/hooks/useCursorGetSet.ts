export interface CursorType {
    line: number;
    off: number;
}

const TextNullLen = (str: string | null) => (str ? str.length : 0);

const useCursorGetSet = () => {
    const getCursorPosition = (parent: Node, node: Node, offset: number) => {
        const pos = { line: 0, off: 0 };
        const Nodes = parent.childNodes;
        let count = 0;

        Nodes.forEach((element) => {
            if (element.nodeValue === '\n') return;
            if (element.hasChildNodes()) {
                let offsetNum = 0;
                element.childNodes.forEach((child) => {
                    if (child === node) {
                        pos.line = count;
                        pos.off = offsetNum + offset;
                        return;
                    } else offsetNum += TextNullLen(child.textContent);
                });
            } else if (element === node) {
                pos.line = count;
                pos.off = offset;
                return;
            }
            count++;
        });
        return pos;
    };

    const setCursorPosition = (parent: Node, pos: CursorType) => {
        const range = document.createRange();
        if (!parent.textContent) return range;

        let { line, off } = pos;
        let count = 0;
        let done = false;
        let Node = parent.childNodes[0];
        parent.childNodes.forEach((element) => {
            if (element.nodeValue === '\n' || done) return;
            else if (line === count) {
                done = true;
                Node = element;
            } else count++;
        });
        done = false;

        if (Node.nodeValue === '') return range.setStart(parent, 0);
        else if (Node.hasChildNodes()) {
            Node.childNodes.forEach((element) => {
                if (done) return;
                const offsetNum = TextNullLen(element.textContent);
                if (offsetNum - off >= 0) {
                    range.setStart(element, off);
                    done = true;
                    return;
                } else off -= offsetNum;
            });
        } else {
            range.setStart(Node, off);
        }
        return range;
    };
    return [getCursorPosition, setCursorPosition] as const;
};

export default useCursorGetSet;
