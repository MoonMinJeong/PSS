const useCursorGetSet = () => {
    const getCursorPosition = (
        parent: Node,
        node: Node,
        offset: number,
        stat: { pos: number; done: boolean },
    ) => {
        if (stat.done) return stat;
        if (!parent.textContent) return stat;

        let currentNode = null;
        if (parent.childNodes.length == 0) {
            stat.pos += parent.textContent.length;
        } else {
            for (var i = 0; i < parent.childNodes.length && !stat.done; i++) {
                currentNode = parent.childNodes[i];
                if (currentNode === node) {
                    stat.pos += offset;
                    stat.done = true;
                    return stat;
                } else getCursorPosition(currentNode, node, offset, stat);
            }
        }
        return stat;
    };

    const setCursorPosition = (
        parent: Node,
        range: Range,
        stat: { pos: number; done: boolean },
    ) => {
        if (stat.done) return range;
        if (!parent.textContent) return;

        let currentNode = null;
        if (parent.childNodes.length == 0) {
            if (parent.textContent.length >= stat.pos) {
                range.setStart(parent, stat.pos);
                stat.done = true;
            } else {
                stat.pos = stat.pos - parent.textContent.length;
            }
        } else {
            for (var i = 0; i < parent.childNodes.length && !stat.done; i++) {
                currentNode = parent.childNodes[i];
                setCursorPosition(currentNode, range, stat);
            }
        }
        return range;
    };
    return [getCursorPosition,setCursorPosition] as const
};

export default useCursorGetSet;
