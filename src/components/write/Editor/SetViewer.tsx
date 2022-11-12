import styled from '@emotion/styled';
import { useMemo } from 'react';
import { ViewerType } from '.';

function MDViewer({ content }: ViewerType) {
    const MDText = useMemo(() => ({ __html: content }), [content]);
    return <_LivePreView dangerouslySetInnerHTML={MDText}></_LivePreView>;
}

const _LivePreView = styled.pre`
    margin-top: 20px;
    font-size: 18px;
    width: 100%;
    white-space: pre-wrap;
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
    hr {
        border-bottom: 1px solid ${({ theme }) => theme.color.gray500};
    }
`;

export default MDViewer;
