import Link from 'next/link'
import Head from 'next/head'

import styles from './style.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Smart Gadget</title>
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
            />
          </label>
          
          <div className={styles.button}>
            <Link className={styles.link} href="/results"> Confirmar </Link> 
          </div> 
          
        </div>
      </main>
    </div>
  )
}



