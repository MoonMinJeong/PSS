import styled from '@emotion/styled';

const Menulist = () => {
    return (
        <_Container>
            <button className="modify">소개글 수정</button>
            <button className="delete">소개글 삭제</button>
        </_Container>
    );
};

export default Menulist;

const _Container = styled.div`
    position: absolute;
    padding: 12px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme.color.white};
    button {
        cursor: pointer;
        font-size: 14px;
        user-select: none;
        color: ${({ theme }) => theme.color.gray900};
    }
    .delete {
        margin-top: 12px;
        color: ${({ theme }) => theme.color.systemRed};
    }
`;
