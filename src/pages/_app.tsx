// pages/_app.tsx
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

// Importações de bibliotecas externas
import "bootstrap/dist/css/bootstrap.min.css";
import "@/assets/css/fontawesome-all.min.css";
import "@/assets/css/animate.min.css";

// Importações de estilos personalizados
import "@/assets/css/style.css";
import "@/assets/css/spacing.css";
import "@/assets/css/bootstrap-modifications.css";
import "@/assets/css/mouse-effect.css";

// Importação do componente de cursor
import Cursor from "@/components/sections/Cursor/Cursor";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Link para a fonte externa, se necessário*/}
        <link
          href="https://fonts.googleapis.com/css2?family=Brygada+1918:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Cursor />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
