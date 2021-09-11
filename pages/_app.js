import '../styles/main.scss'
import { useRouter } from 'next/router';
import { useEffect } from   'react'

import * as ga from '../lib/ga'

function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    /* const handleRouteChange = (url) => {
      if (typeof window !== 'undefined') {
        ga.pageview(url)
      }
    } */

    const handleRouteChange = (url) => (typeof window !== 'undefined') ? ga.pageview(url) : false

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => router.events.off('routeChangeComplete', handleRouteChange)

  }, [router.events])

  return (
    <>
      <Component {...pageProps} />
      <h3 style={{
        position: "absolute",
        top: '0px',
        right: '30px',
        color: 'red'
      }}>
        BETA
      </h3>
    </>
  )
}

export default MyApp
