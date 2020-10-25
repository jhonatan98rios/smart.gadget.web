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

        { content.data.map((hardware, index)=>{
          return(
            <div className={styles.card} key={index}>
              <div className={styles.imageBox}>
                { hardware.image && <img className={styles.image} src={hardware.image} alt="hardware" /> }
              </div>
              <div className={styles.description}>
                <p> CPU: {hardware.cpu} </p>
                <p> Placa Mãe: {hardware.moba} </p>
                <p> Armazenamento: {hardware.storage} </p>
                <p> Ram: {hardware.ram} </p>
                <p> GPU: {hardware.gpu} </p>
                <p> Sistema: {hardware.so || 'Windows ou Linux'} </p>
                <p> Valor aproximado: R$ {hardware.price} </p>
              </div>
            </div>
          )
        }) }
        
      </Flickity>
    </div>
  );
}

export default Carousel