import styled from '@emotion/styled';
import { marked } from 'marked';
import { useMemo } from 'react';
import { ViewerType } from '.';

function MDViewer({ content }: ViewerType) {
    const MDP = () => {
        const md = marked.parse(content);
        return { __html: md };
    };

    const MDText = useMemo(MDP, [content]);
    return <_LivePreView dangerouslySetInnerHTML={MDText}></_LivePreView>;
}

const _LivePreView = styled.pre`
    margin-top: 20px;
    font-size: 18px;
    em {
        font-style: italic;
    }
    code {
        border-radius: 5px;
        font-size: 16px;
        padding: 0 5px;
        background-color: ${({ theme }) => theme.color.gray500};
    }
    blockquote {
        padding-left: 25px;
        border-left: 5px solid ${({ theme }) => theme.color.main};
        background-color: ${({ theme }) => theme.color.gray300};
    }
    a {
        color: ${({ theme }) => theme.color.main};
    }
`;

export default MDViewer;
