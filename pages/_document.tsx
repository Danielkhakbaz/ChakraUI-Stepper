import { Html, Head, Main, NextScript } from "next/document";

const MyDocument: React.FC = () => {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <link rel="icon" href="/Favicon.png" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
