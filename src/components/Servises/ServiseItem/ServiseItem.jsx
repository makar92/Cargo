import React from 'react' 
import styles from './ServiseItem.module.scss'
import Button from '../../UI/Button/Button'

const ServiseItem = (props) => {
  return (
    <div className={styles.serbiseItem}>
      <div className={styles.serbiseItem__bg}>
        <img src={props.image} alt="bg" />
        <div className={styles.serbiseItem__gradient}></div>
      </div>
      <div className={styles.serbiseItem__content}>
        <div className={styles.serbiseItem__title}>{props.title}</div>
        <div className={styles.serbiseItem__text}>{props.text}</div>
        <Button text="Подробнее" transparent/>
      </div>
    </div>
  )
}

export default ServiseItem