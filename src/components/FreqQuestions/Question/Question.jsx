import React from 'react'
import styles from './Question.module.scss'
import Arrow from '../../UI/Arrow/Arrow';

const Question = ( { isActive, onArow, ...props}) => {

  return (
    <div 
      className={isActive
        ? styles.question + " " + styles.activeQuestion
        : styles.question
      } 
    >
      <div className={styles.question__header}>
        <div className={styles.question__title}>{props.title}</div>
        <Arrow 
          direction={isActive ? "up" : "right"}
          className={styles.question__arrow}
          onClick={onArow}
          isActive={isActive ? true : false}
          style={{display:"none"}}
        />
      </div>
      <div className={styles.question__body}>{props.text}</div>
    </div>
  )
}

export default Question