import type { AppProps } from 'next/app';
import ThemeStyle from '../styles';
import Header from '../components/Header';
import 'rc-slider/assets/index.css';
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';

function MyApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 10000,
            },
        },
    });
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeStyle>
                    <Header />
                    <Component {...pageProps} />
                </ThemeStyle>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
