import Head from 'next/head'
import Link from 'next/link'
import { withRouter, useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import axios from 'axios'

import Carousel from '../../components/results/carousel'
import styles from './style.module.scss'

function Results({router}){

  const [content, setContent] = useState(null)
  const routing = useRouter()

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
    <div>
      <Head>
        <title>Smart Gadget | Resultado</title>
        <meta name="description" content="Encontre o pc ideal para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        { content?.status == 200 && <Carousel content={content} /> }
        <div className={styles.button}>
          <Link className="link" href="/"> Início </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Results);
