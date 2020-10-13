import React from 'react';
import Carousel from '../../components/Results/Carousel'
import Link from 'next/link'

import styles from './style.module.scss'

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

function Results(){
  return (
    <div className={styles.container}>
      <Carousel content={content} />
      <div className={styles.button}>
        <Link className="link" href="/"> Início </Link>
      </div>
    </div>
  );
}

export default Results;
