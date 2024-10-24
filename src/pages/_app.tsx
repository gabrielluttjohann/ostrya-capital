// pages/_app.tsx
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/spacing.css";
import "@/assets/css/bootstrap-modifications.css";
import "@/assets/css/fontawesome-all.min.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/swiper-bundle.min.css";

import "@/assets/css/style.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
