import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Info from '../components/home/Info'
import styles from './style.module.scss'
import { useEffect, useState } from 'react'

export default function Home() {

  const router = useRouter()
  const [opacity, setOpacity] = useState(1)

  function updateOpacity(){
    let vh = window.scrollY / 750
    setOpacity(1 - vh)
  }
  
  useEffect(() => {
    document.querySelector('html').style.overflowY = "hidden"
    return () => document.querySelector('html').style.overflowY = "scroll"
  }, [])

  useEffect(() => {

    window.addEventListener("scroll", (event) => {
      updateOpacity()
    })

    return () => window.removeEventListener('scroll', updateOpacity)
  })

  return (
    <div className="transition">
      <Head>
        <title>Smart Gadget</title>
        <meta name="description" content="Encontre o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
        <meta name='theme-color' content='#000000' />
      </Head>

      <main>
        <div className={styles.container} style={{opacity}}>
          <img src="/logo.svg" className={styles.image} />
          <h2 className={styles.title}> Smart Gadget </h2>

          <div className={`${styles.button} p-l-16 p-r-16`} onClick={ () => router.push('/pesquisar') }>
            <p className={styles.link}> 
              Começar
            </p> 
          </div>

          <Link href="#info">
            <a className={styles.anchor}>
              Informações
            </a>
          </Link>

          <p className={styles.disclaimer}> *Não forneça dados sensíveis. Os dados informados serão catalogados e expostos em um banco de dados aberto, para fins de estudo. </p>
        </div>

        <Info />
      </main>
    </div>
  )
}



