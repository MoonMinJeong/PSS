import { css } from '@emotion/react';

const global = css`
    @import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        border: 0;
        outline: unset;
        list-style: none;
        font-style: normal;
        font-family: 'noto-sans-cjk-kr', sans-serif;
    }
    button,
    label {
        cursor: pointer;
        background-color: transparent;
    }
    blockquote,
    q {
        quotes: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    input[type='number']::-webkit-outer-spin-button,
    input[type='number']::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;

export default global;
