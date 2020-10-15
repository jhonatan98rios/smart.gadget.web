import Flickity from 'react-flickity-component'

import styles from './style.module.scss'

const flickityOptions = {
  initialIndex: 0,
  draggable: true,
  freeScroll: false,
  prevNextButtons: false,
  pageDots: false,
  accessibility: true,
  cellAlign: 'center'
}

function Carousel({content}) {

  return (
    <div>
      <Flickity
        className={styles.carousel}
        elementType={'div'}
        options={flickityOptions}
        disableImagesLoaded={false}
        reloadOnUpdate
        static
      >

        { content?.data.map((notebook, index)=>{
          return(
            <div className={styles.card} key={index}>
              <div className={styles.imageBox}>
                <img className={styles.image} src={notebook.image} alt="notebook" />
              </div>
              <div className={styles.description}>
                <strong> {notebook.name} </strong>
                <p> CPU: {notebook.cpu} </p>
                <p> Armazenamento: {notebook.storage} </p>
                <p> Ram: {notebook.ram} </p>
                <p> GPU: {notebook.gpu} </p>
                <p> Sistema: {notebook.so} </p>
                <p> Tela: {notebook.screen} </p>
                <p> Peso: {notebook.weight} </p>
                <p> Valor aproximado: R$ {notebook.price} </p>
              </div>
            </div>
          )
        }) }
        
      </Flickity>
    </div>
  );
}

export default Carousel