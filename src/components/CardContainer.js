import styles from '@/styles/CardContainer.module.scss'
import cardData from './cardData'
const CardContainer = props => {
  return (
  <>
    <div className={styles.cardContainer}>
      <p className={styles.logo}> Logo </p>
      <div className={styles.container}>
        {cardData.map((item, index) => 
          <div key={item.id} className={styles.card}>
            <img 
              src={item.path}
              alt={item.alt} 
              className={styles.logo}
            />
            <p className={styles.text}>
              {props.cardsText[index]}
            </p>
          </div>
        )}
      </div>
    </div>
  </>
  )
}

export default CardContainer