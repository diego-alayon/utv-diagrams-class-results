import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
// import '../styles/globals.css';

function Home({ Component, pageProps }: AppProps) {
  return (
    <>
    <Layout>
      Hola
    </Layout>
    </>

  );
}

export default Home;
