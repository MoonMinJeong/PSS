import { marked } from 'marked';

const renderer: { [n: string]: Function } = {
    heading(text: string, level: 1 | 2 | 3 | 4 | 5 | 6) {
        const a = '#';
        return `<h${level}>${a.repeat(level)} ${text}</h${level}>`;
    },
    em(text: string) {
        return `*<em>${text}</em>*`;
    },
    strong(text: string) {
        return `**<strong>${text}</strong>**`;
    },
    br() {
        return '<br />';
    },
};

const tokenizer: any = {
    blockquote() {},
    hr() {},
    list() {},
    link() {},
    image() {},
    codespan() {},
    del() {},
};

const useDisableMark = () => {
    const ApplyList = ['blockquote', 'list', 'hr', 'link', 'image'];

    const DisableFeature = (Feature: string[]) => {
        marked.use({
            tokenizer,
            renderer,
        });
        const F = { exec: function () {} };
        var lexer: any = new marked.Lexer({});
        Feature.map((e) => {
            if (lexer) lexer.tokenizer.rules.block[e] = F;
        });
    };

    const Mark = (str: string) => {
        marked.setOptions(marked.getDefaults());
        return marked.parse(str);
    };

    const DisableMark = (str: string) => {
        DisableFeature(ApplyList);
        return marked.parse(str);
    };
    return [Mark, DisableMark];
};

export default useDisableMark;
