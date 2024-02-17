import React from 'react'
import styles from './DeliveryItem.module.scss'
import Button from '../../UI/Button/Button'

const DeliveryItem = (props) => {
  return (
    <div className={styles.diliveryItem}>
      <div className={styles.diliveryItem__image}>
        <img src={props.image} alt="bg" />
      </div>
      <div className={styles.diliveryItem__content}>
        <div className={styles.diliveryItem__title}>{props.title}</div>
        <div className={styles.diliveryItem__parametres}>
          <div className={styles.diliveryItem__parametr}>
            <div className={styles.diliveryItem__icon}>
              <img src="./image/deliveryOptions/icons/calendar.svg" alt="calendar" />
            </div>
            <div className={styles.diliveryItem__text}>{props.period}</div>
          </div>
          <div className={styles.diliveryItem__parametr}>
            <div className={styles.diliveryItem__icon}>
              <img src="./image/deliveryOptions/icons/box.svg" alt="box" />
            </div>
            <div className={styles.diliveryItem__text}>{props.weight}</div>
          </div>
        </div>
        <div className={styles.diliveryItem__price}>
          от <span>{props.price}</span>$/кг
        </div>
        <div className={styles.diliveryItem__buttons}>
          <Button text="оставить заявку"/>
          <Button text="Подробнее" transparent/>
        </div>
      </div>
    </div>
  )
}

export default DeliveryItem