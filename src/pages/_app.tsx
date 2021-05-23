import Head from 'next/head'
import React from 'react'
import { BRAND } from 'src/constants/brand.constant'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { makePageTitle } from 'src/utils/page-title.util'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const Layout = Component.layout || DefaultLayout

  return (
    <>
      <Head>
        <title>{makePageTitle(BRAND.name, Component.pageTitle)}</title>
        <meta name="description" content={BRAND.description} />
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
