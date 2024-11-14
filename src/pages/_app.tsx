// pages/_app.tsx
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/spacing.css";
import "@/assets/css/bootstrap-modifications.css";
import "@/assets/css/animate.min.css";
import "@/assets/css/swiper-bundle.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/css/style.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const initializeGA = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag("js", new Date());
      gtag("config", "G-YTL355PXNZ");
    };

    // Adiciona o script do Google Analytics
    const gaScript = document.createElement("script");
    gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-YTL355PXNZ";
    gaScript.async = true;
    gaScript.onload = initializeGA;
    document.head.appendChild(gaScript);
  }, []);

  return (
    <>
      <Head>
        <title>Ostrya Capital</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
