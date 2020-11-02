import styles from './style.module.scss'

function Info({top}){

  return (
    <div className={styles.container} style={{top}}>
      <p className={styles.description}>
        <strong> Encontre o computador ideal para você! </strong><br/>
        <div className="only-desktop">Através de inteligência artifícial e processameento de linguagem natural, o Smart Gadget é capaz de identificar qual hardware e software se encaixam em suas necessidades.<br/><br className="only-desktop"/> </div>
        É só inserir algumas informações, como: <br/>"Preciso de um computador para edição de vídeo", ou até, "Quero um pc para jogar". 
        <br/><br className="only-desktop"/> Depois é só pressionar o botão "Confirmar" e aguardar que nossos servidores irão trabalhar para encontrar o pc ideal para sua necessidade.
        <br/>Clique abaixo para começar
      </p>        
    </div>
  );
}

export default Info