import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import React from 'react'

interface IGlobalSeo {
  icon: string
  canonical: string
  siteName: string
}

const GlobalSeo: React.FC<IGlobalSeo> = ({ icon, canonical, siteName }) => {
  const router = useRouter()

  return (
    <DefaultSeo
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'initial-scale=1, width=device-width',
        },
        {
          property: 'google',
          content: 'notranslate',
        },
      ]}
      additionalLinkTags={[
        {
          rel: 'shortcut icon',
          href: icon,
        },
      ]}
      openGraph={{
        type: 'website',
        locale: router.locale,
        url: canonical,
        site_name: siteName,
      }}
      twitter={{
        handle: '@handle',
        site: '@site',
        cardType: 'summary_large_image',
      }}
    />
  )
}

export default GlobalSeo
