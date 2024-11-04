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

    const whatsappScript = document.createElement("script");
    whatsappScript.src =
      "https://d335luupugsy2.cloudfront.net/js/loader-scripts/ddea7ee6-1dbc-4d9b-aba2-8a38f469afca-loader.js";
    whatsappScript.async = true;
    document.head.appendChild(whatsappScript);
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
