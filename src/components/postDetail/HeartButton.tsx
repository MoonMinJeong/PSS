import styled from '@emotion/styled';
import HeartIcon from '../../assets/postDetail/HeartIcon';
import { useState } from 'react';
import { cancelLike, like } from '../../apis/like';

interface Props {
    count: number;
    noticeId: string;
}

const HeartButton = ({ count, noticeId }: Props) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHeart = () => {
        isClicked ? like(noticeId) : cancelLike(noticeId);
    };
    return (
        <_HeartButtonContainerWrapper>
            <_HeartButtonContainer>
                <_HeartButton
                    onClick={() => {
                        setIsClicked(!isClicked);
                        onClickHeart();
                    }}>
                    <HeartIcon isClicked={isClicked} />
                </_HeartButton>
                <p>{isClicked ? ++count : count}</p>
            </_HeartButtonContainer>
        </_HeartButtonContainerWrapper>
    );
};

const _HeartButtonContainerWrapper = styled.div`
    position: absolute;
    top: 110px;
    right: -100px;
`;

const _HeartButtonContainer = styled.div`
    position: fixed;
    border-radius: 100px;
    width: 58px;
    height: 96px;
    background-color: ${({ theme }) => theme.color.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    > p {
        color: ${({ theme }) => theme.color.white};
        margin-top: 8px;
        font-size: 20px;
        font-weight: 500;
    }
`;

const _HeartButton = styled.button`
    width: 44px;
    height: 44px;
    padding-top: 4px;
    border-radius: 50%;
    margin-top: 8px;
    background-color: ${({ theme }) => theme.color.white};
`;

export default HeartButton;
