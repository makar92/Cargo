import React from 'react'
import styles from './DeliveryOptions.module.scss'
import Button from '../UI/Button/Button'

const DeliveryItem = () => {
  return (
    <div className={styles.diliveryItem}>
      <div className={styles.diliveryItem__image}>
        <img src="./image/deliveryOptions/dev_1.jpg" alt="bg" />
      </div>
      <div className={styles.diliveryItem__content}>
        <div className={styles.diliveryItem__title}>Авто - обычная</div>
        <div className={styles.diliveryItem__parametres}>
          <div className={styles.diliveryItem__parametr}>
            <div className={styles.diliveryItem__icon}>
              <img src="./image/deliveryOptions/icons/calendar.svg" alt="calendar" />
            </div>
            <div className={styles.diliveryItem__text}>9-15 дней</div>
          </div>
          <div className={styles.diliveryItem__parametr}>
            <div className={styles.diliveryItem__icon}>
              <img src="./image/deliveryOptions/icons/box.svg" alt="box" />
            </div>
            <div className={styles.diliveryItem__text}>от 5 кг</div>
          </div>
        </div>
        <div className={styles.diliveryItem__price}>
          от <span>2,5</span>$/кг
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