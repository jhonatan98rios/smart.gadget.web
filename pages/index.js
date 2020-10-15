import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './style.module.scss'

export default function Home() {

  const [search, setSearch] = useState('')
  const [warning, setWarning] = useState('')
  const router = useRouter()

  function handleClick(e){
    e.preventDefault()

    if(search.length <= 0){
      setWarning('Me fale um pouco sobre o computador que precisa')
    }else if(search.length <= 8){
      setWarning('Esse texto é muito curto. Me fale um pouco mais')
    }else if(search.length > 1024){
      setWarning('O texto não pode ter mais 1024 caracteres')
    }else{
      setWarning(null)
      router.push({
        pathname: '/results',
        query: { 
          search
        }
      })
    }
  }

  return (
    <div>
      <Head>
        <title>Smart Gadget</title>
        <meta name="description" content="Encontre o pc ideal para você"></meta>
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
          { warning && <div className={styles.warning}> { warning } </div> }
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



