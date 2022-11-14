import styled from '@emotion/styled';
import { ArrowIcon } from '../../assets';

const GoToTop = () => {
    const onClickGoToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <_Wrapper>
            <_Container onClick={onClickGoToTop}>
                <ArrowIcon direction={'top'} color={'#ffffff'} />
            </_Container>
        </_Wrapper>
    );
};

export default GoToTop;

const _Wrapper = styled.div`
    position: absolute;
    top: -92px;
    right: -60px;
`;

const _Container = styled.button`
    position: fixed;
    width: 54px;
    height: 80px;
    background-color: ${({ theme }) => theme.color.main};
    border-radius: 12px;
`;
