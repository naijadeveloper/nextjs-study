import Head from "next/head";
import type { AppProps } from "next/app";
//
import Layout from "@/components/Layout";
//
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>For all</title>
        <meta name="keywords" content="keywording, enoch" />
        <meta name="description" content="describing the universe" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
