import type { AppProps } from 'next/app';
import ThemeStyle from '../styles';
import Header from '../components/Header';
import 'rc-slider/assets/index.css';
import { DehydratedState, Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps<{ dehydratedState: DehydratedState }>) {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                staleTime: 10000,
            },
        },
    });
    const route = useRouter();
    const is_on_write_now = route.route.includes('write') || route.route.includes('review');
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeStyle>
                    {!is_on_write_now && <Header />}
                    <Component {...pageProps} />
                </ThemeStyle>
            </Hydrate>
        </QueryClientProvider>
    );
}

export default MyApp;
