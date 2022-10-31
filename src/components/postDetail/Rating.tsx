import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import StarIcon from '../../assets/postDetail/StarIcon';

const Rating = () => {
    const [hovered, setHovered] = useState(0);
    const [rating, setRating] = useState(0);
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
                            onClick={() => setRating(i + 1)}>
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
