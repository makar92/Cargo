import React from 'react'
import styles from './FreqQuestions.module.scss'
import Arrow from '../UI/Arrow/Arrow';

const Question = ( { isActive, onArow}) => {

  return (
    <div 
      className={isActive
        ? styles.question + " " + styles.activeQuestion
        : styles.question
      } 
    >
      <div className={styles.question__header}>
        <div className={styles.question__title}>
          Как рассчитывается стоимость доставки?
        </div>
        <Arrow 
          direction={isActive ? "up" : "right"}
          className={styles.question__arrow}
          onClick={onArow}
          isActive={isActive ? true : false}
          style={{display:"none"}}
        />
      </div>
      <div className={styles.question__body}>
        Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.
        Да, мы предоставляем такую услугу, мы можем взять оплату товара в Китае на себя. Если у вас нет валютного счёта, то можете оплатить товар в рублях на наш счет в России.
      </div>
    </div>
  )
}

export default Question