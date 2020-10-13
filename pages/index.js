import Head from 'next/head'
import { useRouter } from 'next/router'

import styles from './style.module.scss'
import { useState } from 'react'

export default function Home() {

  const [search, setSearch] = useState('')
  const router = useRouter()

  function handleClick(e){
    e.preventDefault()
    router.push({
      pathname: '/results',
      query: { 
        search
      }
    })
  }

  return (
    <div>
      <Head>
        <title>Smart Gadget</title>
        <description> Encontre o pc ideal para você </description>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.container}>
          <h2 className={styles.title}> Smart Search </h2>
          <label className={styles.label}>
            Me fale um pouco sobre o computador que você procura.
            <textarea 
              type="text" 
              className={styles.input} 
              placeholder="Procuro um computador para..."
              value={search}
              onChange={e => setSearch(e.target.value) }
            />
          </label>
          <div className={styles.button}>
            <div 
              className={styles.link} 
              onClick={ handleClick }
            > 
              Confirmar 
            </div> 
          </div> 
        </div>
      </main>
    </div>
  )
}



