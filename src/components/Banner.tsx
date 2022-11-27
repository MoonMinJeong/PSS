import styled from '@emotion/styled';
import banner from '../assets/banner.png';

const Banner = () => {
    return <_Wrapper></_Wrapper>;
};
export default Banner;

const _Wrapper = styled.div`
    width: 100%;
    height: 500px;
    background-size: cover;
    background-image: url(${banner.src});
    background-repeat: no-repeat;
`;
