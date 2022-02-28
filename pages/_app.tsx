import Head from 'next/head'
import { AppProps } from 'next/app'
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
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
  cmsTheme: any
}
let cmsThemeCache: any
export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, cmsTheme, pageProps } = props
  const router = useRouter()
  const [loading, setLoading] = React.useState<boolean>(false)
  console.log('cmsTheme', cmsTheme)

  React.useEffect(() => {
    cmsThemeCache = cmsTheme
  }, [])

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
      <Head>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
        <meta name='google' content='notranslate' />
      </Head>

      <ApolloProvider client={client}>
        <Theme>
          {loading ? (
            <LoadingScreen />
          ) : (
            <Layout cmsTheme={cmsTheme}>
              <Component {...pageProps} />
            </Layout>
          )}
        </Theme>
      </ApolloProvider>
    </CacheProvider>
  )
}

MyApp.getInitialProps = async () => {
  if (cmsThemeCache) {
    return { cmsTheme: cmsThemeCache }
  }

  const { data } = await client.query({
    query: gql`
      query {
        theme {
          data {
            attributes {
              logoTitle
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
              logo {
                data {
                  attributes {
                    url
                    alternativeText
                  }
                }
              }
            }
          }
        }
      }
    `,
  })

  cmsThemeCache = data.theme.data?.attributes
  return { cmsTheme: data.theme.data?.attributes }
}
