import type { AppProps } from 'next/app';
import ThemeStyle from '../styles';
import Header from '../components/Header';
import 'rc-slider/assets/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeStyle>
            <Header />
            <Component {...pageProps} />
        </ThemeStyle>
    );
}

export default MyApp;
