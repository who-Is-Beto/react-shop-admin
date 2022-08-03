import MainLayout from '@/layout/MainLayout';
import { ProvideAuth } from '@/hooks/useAuth';
import '../styles/tailwind.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <ProvideAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProvideAuth>
    </>
  );
}

export default MyApp;
