import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  const getPageName = (path: string) => {
    switch (path) {
      case '/':
        return 'Home';
      case '/search':
        return 'Search';
      case '/file-explorer':
        return 'File Explorer';
      case '/codemap':
        return 'Codemap';
      case '/diagrams':
        return 'Diagrams';
      case '/repositories':
        return 'Repositories';
      case '/admin':
        return 'Admin';
      default:
        return 'Page';
    }
  };

  const pageName = getPageName(router.pathname);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
