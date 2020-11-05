import styles from './style.module.scss'
import Link from 'next/link'

function Info({top}){

  return (
    <div className={styles.container} style={{top}} id="info">
      <div className={styles.description}>
        <strong> Encontre o computador ideal para você! </strong><br/><br/>
        <p>
          Através de inteligência artifícial e processamento de linguagem natural, o Smart Gadget é capaz de identificar qual hardware e software se encaixam em suas necessidades.<br/>
          Para isso, o sistema faz uso de todo o poder computacional disponível na núvem, além das melhores práticas de desenvolvimento, arquitetura e tecnologias disponíveis no mercado.
        </p>
        <p> É só inserir algumas informações, como: <br/>"Preciso de um computador para edição de vídeo", ou até, "Quero um pc para jogar". <br/><br/> 
        Depois é só pressionar o botão "Confirmar" e aguardar que nossos servidores irão trabalhar para encontrar o pc ideal para sua necessidade.</p> <br/>
        <p> Os dados enviados serão armazenados e utilizados para o treinamento do algoritmo. </p> <br/>
        <p className={styles.disclaimer}> Não forneça dados sensíveis. Os dados informados serão catalogados e expostos em um banco de dados aberto, para fins de estudo. </p>
      </div>

      <Link href="#">
        <a className={styles.anchor}>
          Voltar
        </a>
      </Link>
    </div>
  );
}

export default Info