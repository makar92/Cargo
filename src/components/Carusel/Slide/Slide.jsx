import styles from './Slide.module.scss'
import Button from '../../UI/Button/Button'
import React, { Component } from "react";

const Slide = ({...props }) => {

  return (
    <div className={styles.slide} {...props}>
      <div className={styles.slide__content}>
        <div className={styles.slide__title}>{props.title}</div>
        <div className={styles.slide__text}>{props.text}</div>
        <div>
          <Button text="Расчитать стоимость"/>
        </div>
      </div>
      <div className={styles.slide__bgImage}>
        <img src={props.image} alt="bg" />
      </div>
      <div className={styles.slide__bgGradient}></div>
    </div>
  )
}

export default Slide