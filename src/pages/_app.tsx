import type { AppType } from 'next/app'

import Layout from '@/components/layout'

import { trpc } from '../utils/trpc'

import '@/styles/globals.css'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default trpc.withTRPC(MyApp)
