import type { AppProps } from 'next/app';
import { AuthProvider } from '../context/auth/AuthContext';
import './globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return <AuthProvider>{getLayout(<Component {...pageProps} />)}</AuthProvider>;
}
