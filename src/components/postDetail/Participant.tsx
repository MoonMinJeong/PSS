import styled from '@emotion/styled';
import usePostDetail from '../../hooks/usePostDetail';
import Link from 'next/link';

interface Props {
    noticeId: string;
}

const Participant = ({ noticeId }: Props) => {
    const { data: postDetail } = usePostDetail(noticeId);
    return (
        <div>
            <_Label>참가인원</_Label>
            <_ParticipantBox>
                {postDetail?.nicknames.map((content, idx) => (
                    <Link href={`https://www.github.com/${content}`} target="_blank">
                        <p key={idx}>{content}</p>
                    </Link>
                ))}
            </_ParticipantBox>
        </div>
    );
};

const _Label = styled.p`
    color: ${({ theme }) => theme.color.gray700};
    margin: 0 0 8px 14px;
`;

const _ParticipantBox = styled.div`
    padding: 12px 20px;
    width: 100%;
    flex-wrap: wrap;
    display: flex;
    gap: 8px 12px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.color.gray300};
    > p {
        user-select: none;
        cursor: pointer;
        font-size: 16px;
        color: ${({ theme }) => theme.color.main};
        font-weight: ${({ theme }) => theme.font.medium};
    }
`;

export default Participant;
