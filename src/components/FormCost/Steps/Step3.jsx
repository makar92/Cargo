import React from 'react'
import styles from './Steps.module.scss'

const Step3 = (props) => {
  
  return (
    <div className={styles.stap3 + " " + props.className}>
      <div className={styles.stap3__image}>
        <img src="./image/formCost/stap3.svg" alt="img" />
      </div>
      <div className={styles.stap3__title}>Спасибо за заявку!</div>
      <div className={styles.stap3__text}>Мы обязатальено свяжемся с вами.</div>
      <div className={styles.stap3__nameList}>Мы обязатальено свяжемся с вами.</div>
      <ul className={styles.stap3__list}>
        <li>Услуги</li>
        <li>Прмеры грузоперевозок</li>
        <li>Поиск товаров в Китае</li>
      </ul>
    </div>
  )
}

export default Step3