import React from 'react' 
import styles from './InfoItem.module.scss'

const InfoItem = (props) => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoItem__image}>
        <div className={styles.infoItem__bgCircle}>
          <img src={props.image} alt="svg" />
        </div>
      </div>
      <div className={styles.infoItem__text}>
        {props.text}
      </div>
    </div>
  )
}

export default InfoItem