import styles from './Carusel.module.scss'
import Button from '../UI/Button/Button'
import React, { Component } from "react";

const Slide = ({...props }) => {

  return (
    <div className={styles.slide} {...props}>
      <div className={styles.slide__content}>
        <div className={styles.slide__title}>Прямое КАРГО из Китая</div>
        <div className={styles.slide__text}>Доставляем любые грузы из Китая по честной цене</div>
        <div>
          <Button text="Расчитать стоимость"/>
        </div>
      </div>
      <div className={styles.slide__bgImage}>
        <img src="./image/carusel/1sl.jpg" alt="bg" />
      </div>
      <div className={styles.slide__bgGradient}></div>
    </div>
  )
}

export default Slide