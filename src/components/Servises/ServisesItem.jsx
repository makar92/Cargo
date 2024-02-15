import React from 'react' 
import styles from './Servises.module.scss'
import Button from '../UI/Button/Button'

const ServisesItem = () => {
  return (
    <div className={styles.serbisesItem}>
      <div className={styles.serbisesItem__bg}>
        <img src="./image/servises/servises_1.jpg" alt="bg" />
        <div className={styles.serbisesItem__gradient}></div>
      </div>
      <div className={styles.serbisesItem__content}>
        <div className={styles.serbisesItem__title}>
          Выкуп товара
        </div>
        <div className={styles.serbisesItem__text}>
          Компания - это полный комплекс логистических услуг по доставке грузов из Китая в Россию - сборные грузы и цельные товарные партии, услуги посредника ТаоБао, КАРГО Китай-Россия.
        </div>
        <Button text="Подробнее" transparent/>
      </div>
    </div>
  )
}

export default ServisesItem