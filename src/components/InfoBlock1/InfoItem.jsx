import React from 'react' 
import styles from './InfoBlock1.module.scss'

const InfoItem = () => {
  return (
    <div className={styles.infoItem}>
      <div className={styles.infoItem__image}>
        <div className={styles.infoItem__bgCircle}>
          <img src="./image/infoBlock1/file_1.svg" alt="svg" />
        </div>
      </div>
      <div className={styles.infoItem__text}>
        Таможенное оформление груза
      </div>
    </div>
  )
}

export default InfoItem