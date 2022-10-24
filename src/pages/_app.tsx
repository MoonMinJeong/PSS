import type { AppProps } from 'next/app';
import ThemeStyle from '../styles';
import 'rc-slider/assets/index.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeStyle>
            <Component {...pageProps} />
        </ThemeStyle>
    );
}

export default MyApp;
