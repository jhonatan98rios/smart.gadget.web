import Head from 'next/head'
import { withRouter, useRouter } from 'next/router'

import styles from './style.module.scss'

function Results({router}){

  //const routing = useRouter()

  function handleClick(e){
    e.preventDefault()
    router.push('/')
  }

  return (
    <div>
      <Head>
        <title>Smart Gadget | Informações</title>
        <script data-ad-client="ca-pub-1739197497968733" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <meta name="description" content="Veja os pcs que separamos para você"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h2 className={`${styles.title} m-b-48`}> Entenda como o app funciona </h2>
        <p className={styles.description}>
          Encontre o computador ideal para você! 
          Através de inteligência artifícial e processameento de linguagem natural, o Smart Gadget é capaz de identificar qual hardware e software se encaixam em suas necessidades. É só inserir algumas informações sobre o uso (exemplo: "Preciso de um computador para edição de vídeo", ou até, "Quero um pc para jogar") e nossos servidores fazem todo o resto. Nenhum dado será armazenado.
        </p>        
        <div className={`${styles.button} p-l-16 p-r-16`} href="/" onClick={ handleClick }>
          <div className={styles.link}> Início </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Results);
