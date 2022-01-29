import React, { useEffect } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { DefaultSeo } from 'next-seo'

import Logo from '@/components/p_logo'
import Progressbar from '@/components/progressbar'
import { initialize } from '@/stores/readiness'
import { useLoaderStore } from '@/stores/loader'
import { useLogoStore } from '@/stores/logo'
import { SeoFavicon, SeoOG } from '@/constants/seo'
import '@/styles/globals.css'

const SpringConfig = {
  stiffness: 40,
  damping: 12,
}

function MyApp({ Component, pageProps }: AppProps) {
  const { isLoading } = useLoaderStore()
  const { logoPos } = useLogoStore()
  const { asPath } = useRouter()

  useEffect(() => {
    initialize()
  }, [])

  return (
    <Flipper
      flipKey={`${asPath}-${isLoading ? 'hide' : 'ready'}`}
      spring={SpringConfig}
      decisionData={{
        asPath,
      }}
    >
      <DefaultSeo
        titleTemplate="%s | Frontend Developer"
        title="Stephan Burger"
        description="Hey, I'm Stephan, a front-end developer. I develop websites and applications with impactful experiences, excellent performance and modern best practices."
        additionalLinkTags={SeoFavicon}
        additionalMetaTags={[{ name: 'theme-color', content: '#0C0E0F' }]}
        openGraph={SeoOG}
      />

      <Progressbar />

      <Component {...pageProps} />

      <Flipped flipId="overlay">
        <div
          className={clsx('fixed inset-0 bg-dark-900 pointer-events-none', {
            '-translate-y-full': !isLoading,
          })}
        />
      </Flipped>

      {logoPos === 'in-loader' && (
        <div className="fixed inset-0 flex items-center justify-center inset-x-16 xs:inset-8 sm:inset-x-0">
          <Logo className="max-w-[250px] h-auto sm:w-96" type="main" />
        </div>
      )}
    </Flipper>
  )
}

//* Done
export default MyApp
