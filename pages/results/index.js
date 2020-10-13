import Link from 'next/link'
import { withRouter } from 'next/router'
import Head from 'next/head'

import Carousel from '../../components/Results/Carousel'

import styles from './style.module.scss'
import { useEffect } from 'react'

const content = {
  data: [
    {
      image: 'https://s2.glbimg.com/P_xNC3JLsCLd5FZmgF25Fiseqyc=/0x0:1024x820/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/C/8/vBgzB8RiqZEjt1dvLpXQ/product-1-20200512115231-5eba1d7f42d90.png',
      name: 'Notebook',
      cpu: '',
      storage: '',
      ram: '',
      gpu: '',
      so: '',
      screen: '',
      weight: '',
      price: ''
    },
    {
      image: 'https://s2.glbimg.com/P_xNC3JLsCLd5FZmgF25Fiseqyc=/0x0:1024x820/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/C/8/vBgzB8RiqZEjt1dvLpXQ/product-1-20200512115231-5eba1d7f42d90.png',
      name: 'Notebook',
      cpu: '',
      storage: '',
      ram: '',
      gpu: '',
      so: '',
      screen: '',
      weight: '',
      price: ''
    },
    {
      image: 'https://s2.glbimg.com/P_xNC3JLsCLd5FZmgF25Fiseqyc=/0x0:1024x820/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/C/8/vBgzB8RiqZEjt1dvLpXQ/product-1-20200512115231-5eba1d7f42d90.png',
      name: 'Notebook',
      cpu: '',
      storage: '',
      ram: '',
      gpu: '',
      so: '',
      screen: '',
      weight: '',
      price: ''
    }
  ]
}

function Results({router}){

  useEffect(() => {
    console.log(router.query.search)
  }, [router])

  return (
    <div>

      <Head>
        <title>Smart Gadget | Resultado</title>
        <description> Encontre o pc ideal para você </description>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Carousel content={content} />
        <div className={styles.button}>
          <Link className="link" href="/"> Início </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Results);
