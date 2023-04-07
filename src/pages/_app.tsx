import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import type { AppType } from "next/app";

import Layout from "@/components/layout";

import { trpc } from "../utils/trpc";

import "@/styles/globals.css";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default trpc.withTRPC(App);
