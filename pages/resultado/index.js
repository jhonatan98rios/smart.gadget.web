import Head from 'next/head'
import { withRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Carousel from '../../components/results/Carousel/index.js'

import styles from './style.module.scss'

function Results({router}){

  const [content, setContent] = useState(null)
  const routing = useRouter()

  function handleClick(e){
    e.preventDefault()
    router.push('/pesquisar')
  }

  useEffect(() => {
    if(!router.query.search) {
      routing.push('/')
    }else{
      axios.post('/api/smart', {
        text: router.query.search, 
      })
      .then(response => setContent(response))
      .catch(reject => console.log(reject))
    }
  }, [])

  return (
    <div className="transition">
      <Head>
        <title>Smart Gadget | Resultado</title>
        <meta name="description" content="Veja os pcs que separamos para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        { !content && <img className={styles.svg} src="./atom.svg" alt="loading" /> }

        { content?.status == 200 &&
          <div>
            <h2 className={`${styles.title}`}> Veja o que separamos para você </h2>
            <Carousel content={content} />
            <div className={`${styles.button} p-l-16 p-r-16`} href="/" onClick={ handleClick }>
              <div className={styles.link}> Início </div>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default withRouter(Results);
