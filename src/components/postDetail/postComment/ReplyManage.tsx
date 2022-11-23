import styled from '@emotion/styled';
import topArrow from '../../../assets/postDetail/topArrow.png';
import downArrow from '../../../assets/postDetail/downArrow.png';
import { useState } from 'react';
import Reply from './Reply';
import CommentInput from './CommentInput';
import { useRouter } from 'next/router';
import { ReplyData } from '../../../models/notice/response';

interface ReplyManageProps {
    replyData: ReplyData[] | undefined;
}

interface Props extends ReplyManageProps {
    commentId?: string;
}

const ReplyManage = ({ commentId, replyData }: Props) => {
    const [viewReply, setViewReply] = useState(false);
    const [viewReplyInput, setViewReplyInput] = useState(false);
    const id = useRouter().query.id as string;
    return (
        <>
            <_ReplyManageContainer>
                <_ViewReply
                    onClick={() => {
                        setViewReply(!viewReply);
                    }}>
                    <img src={viewReply ? topArrow.src : downArrow.src} alt="화살표" />
                    {viewReply ? <p>숨기기</p> : <p>답글 {replyData?.length}개</p>}
                </_ViewReply>
                <i>{'•'}</i>
                <p onClick={() => setViewReplyInput(!viewReplyInput)}>답글 작성</p>
            </_ReplyManageContainer>
            {viewReplyInput && (
                <CommentInput
                    type="reply"
                    noticeId={id}
                    commentId={commentId}
                    placeholder="답글을 입력해주세요."
                    isCancel={true}
                    onCancel={() => {
                        setViewReplyInput(false);
                    }}
                />
            )}
            {viewReply && replyData?.map((item, idx) => <Reply {...item} key={idx} />)}
        </>
    );
};

const _ReplyManageContainer = styled.div`
    display: flex;
    margin-bottom: 20px;
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
