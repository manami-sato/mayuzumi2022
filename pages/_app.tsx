import { ChakraProvider } from '@chakra-ui/react';
import theme from '../src/theme';
import { AppProps } from 'next/dist/shared/lib/router/router';
// eslint-disable-next-line @next/next/no-document-import-in-page
import Head from 'next/head';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const AnyComponent = Component as any;
  return (
    <>
      <Head>
        <title>黛の2022年7月スケジュール帳</title>
        <meta
          property="og:title"
          content="黛の2022年7月スケジュール帳"
          key="title"
        />
        <meta property="og:url" content="https://www.mayuzumi2022.com" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="黛の2022年7月スケジュール帳" />
        <meta
          property="og:description"
          content="黛灰さんの2022年7月の配信スケジュールです。"
        />
        <meta property="og:site_name" content="黛の2022年7月スケジュール帳" />
        <meta
          property="og:image"
          content="https://images.microcms-assets.io/assets/647bcd6f4e7f44178ce069f1433b38f0/23cfa4c7e78f4010b98e702edc8f81dc/cover.png"
        />
        <meta name="twitter:card" content="Summary Card" />
        {/* <meta name="twitter:site" content="@ツイッターユーザー名" /> */}
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <AnyComponent {...pageProps} />
      </ChakraProvider>
    </>
  );
};
export default MyApp;
