import styled from '@emotion/styled';
import Link from 'next/link';
import { NoticeCardData } from '../../models/notice/response';

interface PropsTyps {
    saveNotice: NoticeCardData;
    onClickForRemove: (notice_Id: string) => void;
}

function SavePost({ saveNotice, onClickForRemove }: PropsTyps) {
    const day = saveNotice.create_time.split('T');

    const clientRemove = () => onClickForRemove(saveNotice.notice_id);

    return (
        <_Wrapper>
            <Link href="/">
                <_ContentBox>
                    <_Title>{saveNotice.nickname}</_Title>
                    <_Content>{saveNotice.introduction}</_Content>
                </_ContentBox>
            </Link>
            <_BottomBox>
                <_Day>{day[0]}</_Day>
                <_Remove onClick={clientRemove}>삭제</_Remove>
            </_BottomBox>
        </_Wrapper>
    );
}

const _Wrapper = styled.div`
    box-shadow: 0 0 12px 0 rgb(0, 0, 0, 25%);
    border-radius: 12px;
    width: 584px;
    height: 200px;
    padding: 32px 0 0 30px;
    margin-bottom: 30px;
`;

const _Title = styled.div`
    font-weight: bold;
    font-size: 32px;
    margin-bottom: 5px;
`;

const _Content = styled.div`
    color: ${({ theme }) => theme.color.gray700};
    height: 80px;
`;

const _ContentBox = styled.div`
    cursor: pointer;
`;

const _BottomBox = styled.div`
    font-size: 14px;
`;

const _Day = styled.span`
    color: ${({ theme }) => theme.color.gray700};
    display: inline-block;
    width: 500px;
`;

const _Remove = styled.span`
    color: ${({ theme }) => theme.color.systemRed};
`;

export default SavePost;
