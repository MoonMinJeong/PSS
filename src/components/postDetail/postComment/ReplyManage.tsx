import styled from '@emotion/styled';
import topArrow from '../../../assets/postDetail/topArrow.png';
import downArrow from '../../../assets/postDetail/downArrow.png';
import { useState } from 'react';
import Reply from './Reply';
import CommentInput from './CommentInput';

interface Props {
    count: number;
}

const ReplyManage = ({ count }: Props) => {
    const [viewReply, setViewReply] = useState(false);
    const [viewReplyInput, setViewReplyInput] = useState(false);

    return (
        <>
            <_ReplyManageContainer>
                <_ViewReply
                    onClick={() => {
                        setViewReply(!viewReply);
                    }}>
                    <img src={viewReply ? topArrow.src : downArrow.src} alt="화살표" />
                    {viewReply ? <p>숨기기</p> : <p>답글 {count}개</p>}
                </_ViewReply>
                <i>{'•'}</i>
                <p onClick={() => setViewReplyInput(!viewReplyInput)}>답글 작성</p>
            </_ReplyManageContainer>
            {viewReplyInput && (
                <CommentInput
                    height="60px"
                    placeholder="답글을 입력해주세요."
                    isCancel={true}
                    onCancel={() => {
                        setViewReplyInput(false);
                    }}
                />
            )}
            {viewReply && (
                <>
                    <Reply text="그걸 누가 모르나용??" writerName="문정민" />
                    <Reply text="아니 어쩌라고요 저도 알아요" writerName="추혜연" />
                </>
            )}
        </>
    );
};

const _ReplyManageContainer = styled.div`
    display: flex;
    margin-bottom: 12px;
    > p {
        color: ${({ theme }) => theme.color.gray700};
        font-size: 14px;
        user-select: none;
        cursor: pointer;
    }
    > i {
        color: ${({ theme }) => theme.color.gray700};
        user-select: none;
        font-size: 14px;
    }
`;

const _ViewReply = styled.div`
    display: flex;
    cursor: pointer;
    > img {
        width: 14px;
        height: 14px;
        margin-right: 4px;
        user-select: none;
    }
    > p {
        color: ${({ theme }) => theme.color.gray700};
        font-size: 14px;
        user-select: none;
        cursor: pointer;
    }
`;

export default ReplyManage;
