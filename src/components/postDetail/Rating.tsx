import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';
import { modifyStar, writeStar } from '../../apis/star';
import StarIcon from '../../assets/postDetail/StarIcon';
import usePostDetail from '../../hooks/usePostDetail';

interface Props {
    noticeId: string;
}

const Rating = ({ noticeId }: Props) => {
    const [hovered, setHovered] = useState(0);
    const { data } = usePostDetail(noticeId);
    const [rating, setRating] = useState(0);

    useEffect(() => {
        setRating(data?.my_star || 0);
    }, [data]);

    const onClickStar = useCallback(
        (currentRating: number) => {
            rating > 0
                ? modifyStar({ stars: currentRating }, noticeId)
                : writeStar({ stars: currentRating }, noticeId);
            setRating(currentRating);
        },
        [rating, noticeId],
    );
    return (
        <_RatingContainer>
            <_StarBox>
                {Array(5)
                    .fill(0)
                    .map((_, i) => (
                        <div
                            key={i}
                            onMouseLeave={() => setHovered(0)}
                            onMouseEnter={() => setHovered(i + 1)}
                            onClick={async () => {
                                onClickStar(i + 1);
                            }}>
                            <StarIcon color={rating > i || hovered > i ? '#8FB5FF' : '#dedede'} />
                        </div>
                    ))}
            </_StarBox>
            <p>이 글에 대한 평가를 남겨주세요!</p>
        </_RatingContainer>
    );
};

const _RatingContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > p {
        font-size: 16px;
        margin-top: 24px;
        color: ${({ theme }) => theme.color.gray700};
    }
`;

const _StarBox = styled.div`
    gap: 16px;
    display: flex;
    > div {
        user-select: none;
        cursor: pointer;
    }
`;

export default Rating;
