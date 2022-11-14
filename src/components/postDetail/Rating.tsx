import styled from '@emotion/styled';
import { useCallback, useState } from 'react';
import { modifyStar, writeStar } from '../../apis/star';
import StarIcon from '../../assets/postDetail/StarIcon';

interface Props {
    noticeId: string;
}

const Rating = ({ noticeId }: Props) => {
    const [hovered, setHovered] = useState(0);
    const [rating, setRating] = useState(0);
    {
        /*TODO. Detail Post api 연동한 뒤 Rating 변경 감지 추가*/
    }
    const onClickStar = useCallback(() => {
        rating ? modifyStar({ stars: rating }, noticeId) : writeStar({ stars: rating }, noticeId);
    }, [rating, noticeId]);
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
                            onClick={() => {
                                setRating(i + 1);
                                onClickStar();
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
