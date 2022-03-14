import Head from 'next/head'
import { AppContext, AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
import createEmotionCache from '../utils/createEmotionCache'
import Layout from '../components/Layout'
import React from 'react'
import LoadingScreen from '../components/LoadingScreen'
import { useRouter } from 'next/router'
import { ApolloProvider, gql } from '@apollo/client'
import client from '../graphql'
import * as ga from '../utils/ga'
import Theme from '../theme/Theme'
// import '../styles/globals.css'
import App from 'next/app'
import { CmsThemeQuery, Theme as CmsTheme } from '../generated'
import { CMS_THEME_QUERY } from '../graphql/pages-query'
import { DefaultSeo } from 'next-seo'
import GlobalSeo from '../components/GlobalSeo'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const { cmsTheme } = pageProps

  const router = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false)

  React.useEffect(() => {
    const handleStart = (url: string) => {
      ga.pageView(url)
      setLoading(true)
    }

    const handleStop = (url: string) => {
      ga.pageView(url)
      setLoading(false)
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router.events])

  return (
    <CacheProvider value={emotionCache}>
      <GlobalSeo
        icon={cmsTheme.icon.data?.attributes?.url}
        canonical={'https://casinoslive724.com'}
        siteName={cmsTheme.logoTitle}
      />
      <ApolloProvider client={client}>
        <Theme cmsTheme={cmsTheme}>
          {loading ? (
            <LoadingScreen />
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </Theme>
      </ApolloProvider>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const appProps = await App.getInitialProps(ctx)
  const { data } = await client.query<CmsThemeQuery>({
    query: CMS_THEME_QUERY,
  })
  return { ...appProps, pageProps: { cmsTheme: data.theme?.data?.attributes } }
}
