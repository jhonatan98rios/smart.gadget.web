import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from './style.module.scss'

export default function Home() {

  const router = useRouter()

  function navigation(route){
    router.push(route)
  }

  return (
    <div>
      <Head>
        <title>Smart Gadget</title>
        <script data-ad-client="ca-pub-1739197497968733" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta name="description" content="Encontre o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta name='application-name' content='Smart Search' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Smart Search' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='theme-color' content='#000000' />
      </Head>

      <main>
        <div className={styles.container}>
          <h2 className={styles.title}> Smart Search </h2>
          
          <div className={`${styles.button} p-l-16 p-r-16`} onClick={ () => navigation('/pesquisar') }>
            <div className={styles.link}> 
              Pesquisar
            </div> 
          </div> 

          <div className={`${styles.button} p-l-16 p-r-16`} onClick={ () => navigation('/informacoes') }>
            <div className={styles.link}> 
              Informações
            </div> 
          </div> 

        </div>
      </main>
    </div>
  )
}



