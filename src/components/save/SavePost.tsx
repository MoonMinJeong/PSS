import styled from '@emotion/styled';
import Link from 'next/link';
import { PostData } from '../../models/profile/responce';

interface PropsTyps {
    // saveNotice: PostData;
    onClickForRemove: () => void;
}

function SavePost({ onClickForRemove }: PropsTyps) {
    // const day = saveNotice.create_time.split('T');
    return (
        <_Wrapper>
            <Link href="/">
                <div>
                    <_Title>{'타이틀'}</_Title>
                    <_Content>{'내용'}</_Content>
                </div>
            </Link>
            <_BottomBox>
                <_Day>{'2022-10-18'}</_Day>
                <_Remove onClick={onClickForRemove}>삭제</_Remove>
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
